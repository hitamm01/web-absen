# RINGKASAN PERUBAHAN - INTEGRASI DATABASE

## 🎯 Apa yang Sudah Dilakukan

Aplikasi Portal Pembelajaran telah diupdate dari menggunakan **localStorage** menjadi **SQLite Database** untuk penyimpanan data jadwal yang lebih robust dan permanent.

---

## 📋 File-File Yang Ditambahkan/Diubah

### File Baru:
1. **server.js** - Backend server Express.js dengan API
   - Setup SQLite database
   - Create/Read/Update/Delete endpoints untuk jadwal
   - API untuk login
   - CORS enabled untuk komunikasi frontend-backend

2. **package.json** - Konfigurasi Node.js
   - Dependencies: express, sqlite3, cors
   - Scripts untuk menjalankan server

3. **README.md** - Dokumentasi lengkap
   - Cara instalasi
   - API documentation
   - Struktur database
   - Troubleshooting

4. **SETUP_PANDUAN.md** - Panduan step-by-step dalam bahasa Indonesia
   - Instalasi Node.js
   - Setup project
   - Cara menggunakan
   - FAQ

5. **.gitignore** - Ignore files untuk git

### File Diubah:
1. **web prototipe.html** - Frontend
   - Fungsi `updateTabelJadwal()` - Sekarang async, fetch dari API
   - Fungsi `tampilkanJadwalDefault()` - Fallback jika server down
   - Event listener `simpanEditJadwal` - Kirim data ke API
   - Menghapus semua referensi localStorage untuk jadwal
   - Menghapus loading jadwal dari localStorage di `showMainApp()`

---

## 🗄️ Database Structure

### Tabel: jadwal
```sql
CREATE TABLE jadwal (
    id INTEGER PRIMARY KEY,
    hari TEXT NOT NULL,
    waktu TEXT NOT NULL,
    mataPelajaran TEXT NOT NULL,
    guru TEXT,
    ruangan TEXT,
    createdAt DATETIME,
    updatedAt DATETIME,
    UNIQUE(hari, waktu)
)
```

### Tabel: users
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE,
    password TEXT,
    nama TEXT,
    role TEXT,
    createdAt DATETIME
)
```

---

## 🔌 API Endpoints

### Jadwal Management
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/jadwal` | Ambil semua jadwal |
| GET | `/api/jadwal/:hari` | Ambil jadwal hari tertentu |
| POST | `/api/jadwal` | Tambah/Update jadwal |
| DELETE | `/api/jadwal/:hari/:waktu` | Hapus jadwal |
| PUT | `/api/jadwal/reset` | Reset semua jadwal |

### User Management
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/users` | Ambil semua user |
| POST | `/api/login` | Login user |

---

## 💻 Teknologi yang Digunakan

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js + Express.js
- **Database**: SQLite3
- **API Communication**: Fetch API (async/await)
- **Middleware**: CORS, JSON parser

---

## 🔄 Flow Aplikasi (Sebelum → Sesudah)

### SEBELUM (localStorage):
1. User edit jadwal
2. Data disimpan di localStorage browser
3. Data hilang jika browser cache dihapus
4. Tidak bisa diakses dari device lain

### SESUDAH (Database):
1. User edit jadwal di frontend
2. Frontend kirim request POST ke API
3. Server menerima dan simpan ke SQLite database
4. Database persistent & dapat diakses oleh semua user
5. Setiap akses halaman jadwal, data di-fetch dari database

---

## 📊 Diagram Alur Edit Jadwal

```
┌─────────────────────────┐
│  Admin Edit Jadwal      │
│  (Frontend)             │
└────────────┬────────────┘
             │
             ├─ Validasi form
             │
             └──► POST /api/jadwal
                  │
              ┌───▼───────────────────┐
              │ Express Server        │
              │ (Backend)             │
              └───┬───────────────────┘
                  │
                  ├─ Parse JSON body
                  ├─ Validasi data
                  │
                  └──► SQLite Database
                       │
                       ├─ Check UNIQUE(hari, waktu)
                       ├─ INSERT atau UPDATE
                       │
                       └─ Return response
                          │
                          └──► Frontend
                               │
                               ├─ Update tabel jadwal
                               ├─ Show success message
                               └─ Close modal form
```

---

## 🚀 Cara Menjalankan

### Step 1: Install Dependencies
```powershell
cd "d:\web absen"
npm install
```

### Step 2: Jalankan Server
```powershell
npm start
```

Server akan berjalan di `http://localhost:3000`

### Step 3: Buka Aplikasi
```
http://localhost:3000/web%20prototipe.html
```

### Step 4: Login & Test
- Login sebagai admin (admin / admin123)
- Masuk ke halaman "Jadwal"
- Klik "Edit Jadwal"
- Edit jadwal dan simpan
- Jadwal akan tersimpan di database

---

## ✨ Keuntungan Database vs localStorage

| Aspek | localStorage | SQLite Database |
|-------|-------------|-----------------|
| **Persistensi** | Hilang jika cache dihapus | Permanent di server |
| **Kapasitas** | ~5-10MB | Unlimited |
| **Multi-user** | Terpisah per browser | Shared untuk semua user |
| **Security** | Terlihat di DevTools | Aman di server |
| **Backup** | Manual | Bisa otomatis |
| **Skalabilitas** | Buruk | Baik |
| **Performance** | Cepat tapi limited | Fast dengan banyak data |

---

## ⚙️ Konfigurasi

### Mengubah Port Server
Edit `server.js`:
```javascript
const PORT = 3000; // Ubah ke port lain
```

### Mengubah Database Path
Edit `server.js`:
```javascript
const db = new sqlite3.Database('./jadwal.db'); // Ubah path
```

### Menambah User Baru
Harus diupdate di backend atau buat endpoint POST `/api/users`

---

## 🔐 Security Notes

⚠️ **Penting untuk Production:**
1. Jangan hardcode password
2. Gunakan hashing (bcrypt) untuk password
3. Implementasikan JWT authentication
4. Validasi input yang ketat
5. Rate limiting pada API
6. HTTPS untuk enkripsi

---

## 📝 Catatan Penting

1. **Database Otomatis**: Database `jadwal.db` dibuat otomatis saat pertama kali server dijalankan
2. **Jadwal Default**: Jadwal default masih ada di memory, hanya perubahan yang disimpan ke database
3. **Fallback**: Jika server down, aplikasi akan menampilkan jadwal default
4. **CORS**: Sudah enabled, API bisa diakses dari domain mana saja
5. **Concurrency**: SQLite mendukung multiple readers tapi limited writers

---

## 🐛 Debug Mode

Untuk melihat SQL queries yang dijalankan:
```javascript
// Di server.js, uncomment:
sqlite3.verbose()
```

---

## 📦 Deployment Options

Aplikasi ini bisa di-deploy di:
- **Heroku** - Cloud platform gratis
- **Replit** - Online IDE dengan hosting
- **VPS** - Server sendiri dengan Node.js
- **Docker** - Containerized deployment

---

## 🎓 Learning Resources

- Express.js Documentation: https://expressjs.com/
- SQLite Documentation: https://www.sqlite.org/
- Node.js Documentation: https://nodejs.org/
- Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

---

## 📞 Support

Jika ada pertanyaan atau masalah:
1. Cek console browser (F12)
2. Cek console server (PowerShell)
3. Baca error message dengan teliti
4. Cek README.md untuk troubleshooting

---

**Status**: ✅ Semua fitur sudah terintegrasi dengan database  
**Versi**: 1.0.0  
**Last Updated**: December 18, 2025
