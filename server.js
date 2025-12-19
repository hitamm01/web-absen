const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Inisialisasi Database SQLite
const db = new sqlite3.Database('./jadwal.db', (err) => {
    if (err) {
        console.error('Error membuka database:', err);
    } else {
        console.log('Database SQLite terhubung');
        initializeDatabase();
    }
});

// Inisialisasi Database - Buat tabel jika belum ada
function initializeDatabase() {
    db.run(`
        CREATE TABLE IF NOT EXISTS jadwal (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            hari TEXT NOT NULL,
            waktu TEXT NOT NULL,
            mataPelajaran TEXT NOT NULL,
            guru TEXT,
            ruangan TEXT,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(hari, waktu)
        )
    `, (err) => {
        if (err) {
            console.error('Error membuat tabel:', err);
        } else {
            console.log('Tabel jadwal berhasil dibuat/sudah ada');
        }
    });

    // Buat tabel untuk menyimpan user data jika diperlukan
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            nama TEXT NOT NULL,
            role TEXT DEFAULT 'user',
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('Error membuat tabel users:', err);
        } else {
            console.log('Tabel users berhasil dibuat/sudah ada');
        }
    });
}

// ============== API ENDPOINTS UNTUK JADWAL ==============

// GET - Ambil semua jadwal
app.get('/api/jadwal', (req, res) => {
    db.all('SELECT * FROM jadwal ORDER BY hari, waktu', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// GET - Ambil jadwal berdasarkan hari
app.get('/api/jadwal/:hari', (req, res) => {
    const hari = req.params.hari;
    db.all('SELECT * FROM jadwal WHERE hari = ? ORDER BY waktu', [hari], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// POST - Tambah/Update jadwal (jika sudah ada, update; jika belum ada, insert)
app.post('/api/jadwal', (req, res) => {
    const { hari, waktu, mataPelajaran, guru, ruangan } = req.body;

    if (!hari || !waktu || !mataPelajaran) {
        res.status(400).json({ error: 'Hari, waktu, dan mataPelajaran harus diisi' });
        return;
    }

    // Cek apakah jadwal sudah ada
    db.get('SELECT id FROM jadwal WHERE hari = ? AND waktu = ?', [hari, waktu], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (row) {
            // Update jadwal yang sudah ada
            const updateQuery = `
                UPDATE jadwal 
                SET mataPelajaran = ?, guru = ?, ruangan = ?, updatedAt = CURRENT_TIMESTAMP 
                WHERE hari = ? AND waktu = ?
            `;
            db.run(updateQuery, [mataPelajaran, guru, ruangan, hari, waktu], function(err) {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                res.json({ 
                    message: 'Jadwal berhasil diupdate', 
                    id: row.id,
                    data: { hari, waktu, mataPelajaran, guru, ruangan }
                });
            });
        } else {
            // Insert jadwal baru
            const insertQuery = `
                INSERT INTO jadwal (hari, waktu, mataPelajaran, guru, ruangan) 
                VALUES (?, ?, ?, ?, ?)
            `;
            db.run(insertQuery, [hari, waktu, mataPelajaran, guru, ruangan], function(err) {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                res.status(201).json({ 
                    message: 'Jadwal berhasil ditambahkan', 
                    id: this.lastID,
                    data: { hari, waktu, mataPelajaran, guru, ruangan }
                });
            });
        }
    });
});

// DELETE - Hapus jadwal
app.delete('/api/jadwal/:hari/:waktu', (req, res) => {
    const { hari, waktu } = req.params;
    
    db.run('DELETE FROM jadwal WHERE hari = ? AND waktu = ?', [hari, waktu], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        
        if (this.changes === 0) {
            res.status(404).json({ error: 'Jadwal tidak ditemukan' });
            return;
        }
        
        res.json({ message: 'Jadwal berhasil dihapus' });
    });
});

// PUT - Reset jadwal ke default (hapus semua)
app.put('/api/jadwal/reset', (req, res) => {
    db.run('DELETE FROM jadwal', function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Semua jadwal berhasil direset' });
    });
});

// ============== API ENDPOINTS UNTUK USERS ==============

// GET - Ambil semua user
app.get('/api/users', (req, res) => {
    db.all('SELECT id, username, nama, role FROM users', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// POST - Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ error: 'Username dan password harus diisi' });
        return;
    }

    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (row) {
            res.json({ 
                success: true, 
                user: { 
                    username: row.username, 
                    nama: row.nama, 
                    role: row.role 
                } 
            });
        } else {
            res.status(401).json({ success: false, error: 'Username atau password salah' });
        }
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
