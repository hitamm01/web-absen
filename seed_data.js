// FILE INI OPTIONAL - Untuk menambahkan data dummy ke database
// Jalankan file ini SETELAH npm install jika ingin database sudah terisi data awal

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./jadwal.db');

console.log('Menambahkan data dummy ke database...');

// Data jadwal default yang akan dimasukkan ke database
const jadwalDefault = [
    // Senin
    { hari: 'Senin', waktu: '07:30 - 09:00', mataPelajaran: 'Matematika', guru: 'Bu Ani', ruangan: 'Ruang 101' },
    { hari: 'Senin', waktu: '09:15 - 10:45', mataPelajaran: 'Fisika', guru: 'Pak Budi', ruangan: 'Lab Fisika' },
    { hari: 'Senin', waktu: '11:00 - 12:30', mataPelajaran: 'Bahasa Inggris', guru: 'Miss Sarah', ruangan: 'Ruang 102' },
    { hari: 'Senin', waktu: '13:30 - 15:00', mataPelajaran: 'Seni Budaya', guru: 'Bu Citra', ruangan: 'Ruang 103' },

    // Selasa
    { hari: 'Selasa', waktu: '07:30 - 09:00', mataPelajaran: 'Fisika', guru: 'Pak Budi', ruangan: 'Lab Fisika' },
    { hari: 'Selasa', waktu: '09:15 - 10:45', mataPelajaran: 'Kimia', guru: 'Bu Dewi', ruangan: 'Lab Kimia' },
    { hari: 'Selasa', waktu: '11:00 - 12:30', mataPelajaran: 'Matematika', guru: 'Bu Ani', ruangan: 'Ruang 101' },
    { hari: 'Selasa', waktu: '13:30 - 15:00', mataPelajaran: 'PJOK', guru: 'Pak Eko', ruangan: 'Lapangan' },

    // Rabu
    { hari: 'Rabu', waktu: '07:30 - 09:00', mataPelajaran: 'Kimia', guru: 'Bu Dewi', ruangan: 'Lab Kimia' },
    { hari: 'Rabu', waktu: '09:15 - 10:45', mataPelajaran: 'Biologi', guru: 'Bu Fina', ruangan: 'Lab Biologi' },
    { hari: 'Rabu', waktu: '11:00 - 12:30', mataPelajaran: 'Bahasa Indonesia', guru: 'Pak Giri', ruangan: 'Ruang 104' },
    { hari: 'Rabu', waktu: '13:30 - 15:00', mataPelajaran: 'Prakarya', guru: 'Bu Hani', ruangan: 'Ruang Prakarya' },

    // Kamis
    { hari: 'Kamis', waktu: '07:30 - 09:00', mataPelajaran: 'Matematika', guru: 'Bu Ani', ruangan: 'Ruang 101' },
    { hari: 'Kamis', waktu: '09:15 - 10:45', mataPelajaran: 'Fisika', guru: 'Pak Budi', ruangan: 'Lab Fisika' },
    { hari: 'Kamis', waktu: '11:00 - 12:30', mataPelajaran: 'Kimia', guru: 'Bu Dewi', ruangan: 'Lab Kimia' },
    { hari: 'Kamis', waktu: '13:30 - 15:00', mataPelajaran: 'Biologi', guru: 'Bu Fina', ruangan: 'Lab Biologi' },

    // Jumat
    { hari: 'Jumat', waktu: '07:30 - 09:00', mataPelajaran: 'Bahasa Indonesia', guru: 'Pak Giri', ruangan: 'Ruang 104' },
    { hari: 'Jumat', waktu: '09:15 - 10:45', mataPelajaran: 'Bahasa Inggris', guru: 'Miss Sarah', ruangan: 'Ruang 102' },
    { hari: 'Jumat', waktu: '11:00 - 12:30', mataPelajaran: 'Sejarah', guru: 'Pak Irfan', ruangan: 'Ruang 105' },
    { hari: 'Jumat', waktu: '13:30 - 15:00', mataPelajaran: 'Agama', guru: 'Bu Jamilah', ruangan: 'Ruang 106' }
];

// Data user default
const usersDefault = [
    { username: 'admin', password: 'admin123', nama: 'Administrator', role: 'admin' },
    { username: 'andi', password: 'andi123', nama: 'Andi Saputra', role: 'user' },
    { username: 'budi', password: 'budi123', nama: 'Budi Santoso', role: 'user' },
    { username: 'citra', password: 'citra123', nama: 'Citra Lestari', role: 'user' },
    { username: 'dewi', password: 'dewi123', nama: 'Dewi Kusuma', role: 'user' },
    { username: 'eko', password: 'eko123', nama: 'Eko Suryanto', role: 'user' }
];

// Fungsi untuk memasukkan data jadwal
function insertJadwal() {
    const query = `INSERT OR REPLACE INTO jadwal (hari, waktu, mataPelajaran, guru, ruangan) 
                   VALUES (?, ?, ?, ?, ?)`;
    
    let inserted = 0;
    jadwalDefault.forEach(item => {
        db.run(query, [item.hari, item.waktu, item.mataPelajaran, item.guru, item.ruangan], 
            function(err) {
                if (err) {
                    console.error('Error insert jadwal:', err);
                } else {
                    inserted++;
                    console.log(`✓ Jadwal ${item.hari} ${item.waktu} - ${item.mataPelajaran} ditambahkan`);
                    
                    if (inserted === jadwalDefault.length) {
                        console.log(`\n✅ ${inserted} jadwal berhasil ditambahkan!`);
                        insertUsers();
                    }
                }
            });
    });
}

// Fungsi untuk memasukkan data user
function insertUsers() {
    const query = `INSERT OR REPLACE INTO users (username, password, nama, role) 
                   VALUES (?, ?, ?, ?)`;
    
    let inserted = 0;
    usersDefault.forEach(item => {
        db.run(query, [item.username, item.password, item.nama, item.role], 
            function(err) {
                if (err) {
                    console.error('Error insert user:', err);
                } else {
                    inserted++;
                    console.log(`✓ User ${item.username} (${item.nama}) ditambahkan`);
                    
                    if (inserted === usersDefault.length) {
                        console.log(`\n✅ ${inserted} user berhasil ditambahkan!`);
                        console.log('\n🎉 Semua data dummy berhasil ditambahkan ke database!');
                        console.log('Sekarang Anda bisa login dengan:');
                        console.log('  Admin: admin / admin123');
                        console.log('  Siswa: andi / andi123 (atau budi, citra, dewi, eko)');
                        db.close();
                    }
                }
            });
    });
}

// Mulai proses
db.serialize(() => {
    // Buat tabel terlebih dahulu
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
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            nama TEXT NOT NULL,
            role TEXT DEFAULT 'user',
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    console.log('✓ Tabel database sudah disiapkan\n');
    insertJadwal();
});
