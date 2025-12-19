# Portal Pembelajaran Kelas Pintar - Dokumentasi

Aplikasi web Portal Pembelajaran dengan sistem manajemen jadwal berbasis database SQLite.

## Fitur Utama

- **Dashboard**: Menampilkan informasi kelas, jadwal hari ini, dan pengumuman
- **Manajemen Jadwal**: Admin dapat mengedit jadwal pelajaran dengan penyimpanan ke database
- **Materi Pembelajaran**: Akses materi pelajaran dengan topik lengkap
- **Tugas dan Nilai**: Kelola tugas siswa dan nilai akademik
- **Forum Diskusi**: Diskusi antar siswa dan guru
- **Absensi**: Pencatatan kehadiran siswa
- **Database**: Semua perubahan jadwal tersimpan di SQLite database

## Kebutuhan Sistem

- Node.js (v14 atau lebih baru)
- npm (biasanya terbundel dengan Node.js)

## Cara Instalasi dan Menjalankan

### 1. Install Dependencies
```bash
cd d:\web\ absen
npm install
```

Ini akan menginstall:
- Express (framework web)
- SQLite3 (database)
- CORS (untuk cross-origin requests)

### 2. Jalankan Server
```bash
npm start
```

atau

```bash
node server.js
```

Server akan berjalan di `http://localhost:3000`

Anda akan melihat pesan di console:
```
Database SQLite terhubung
Tabel jadwal berhasil dibuat/sudah ada
Tabel users berhasil dibuat/sudah ada
Server berjalan di http://localhost:3000
```

### 3. Buka Aplikasi di Browser
```
http://localhost:3000/web\ prototipe.html
```

Atau cukup akses: `http://localhost:3000` dan browser akan otomatis membuka file HTML

## Login Credentials

### Admin:
- Username: `admin`
- Password: `admin123`

### Siswa:
- Username: `andi` | Password: `andi123`
- Username: `budi` | Password: `budi123`
- Username: `citra` | Password: `citra123`
- Username: `dewi` | Password: `dewi123`
- Username: `eko` | Password: `eko123`

## Fitur Edit Jadwal

### Untuk Admin:
1. Login dengan akun admin
2. Masuk ke halaman "Jadwal"
3. Klik tombol "Edit Jadwal" (hanya terlihat untuk admin)
4. Pilih hari dan waktu yang ingin diubah
5. Pilih mata pelajaran baru
6. (Opsional) Tambahkan nama guru dan ruangan
7. Klik "Simpan Perubahan"
8. Perubahan akan langsung terlihat di tabel jadwal dan tersimpan di database

## API Endpoints

### Jadwal Endpoints

**GET** `/api/jadwal`
- Mengambil semua jadwal dari database

**GET** `/api/jadwal/:hari`
- Mengambil jadwal untuk hari spesifik
- Contoh: `/api/jadwal/Senin`

**POST** `/api/jadwal`
- Menambah atau update jadwal
- Body (JSON):
```json
{
  "hari": "Senin",
  "waktu": "07:30 - 09:00",
  "mataPelajaran": "Matematika",
  "guru": "Bu Ani",
  "ruangan": "Lab. Matematika"
}
```

**DELETE** `/api/jadwal/:hari/:waktu`
- Menghapus jadwal
- Contoh: `/api/jadwal/Senin/07:30%20-%2009:00`

**PUT** `/api/jadwal/reset`
- Mereset semua jadwal ke kosong (default)

## Struktur Database

### Tabel: jadwal
| Kolom | Tipe | Keterangan |
|-------|------|-----------|
| id | INTEGER PRIMARY KEY | ID unik |
| hari | TEXT | Hari pelajaran (Senin-Jumat) |
| waktu | TEXT | Waktu pelajaran |
| mataPelajaran | TEXT | Nama mata pelajaran |
| guru | TEXT | Nama guru pengampu |
| ruangan | TEXT | Ruangan/Lab |
| createdAt | DATETIME | Waktu pembuatan |
| updatedAt | DATETIME | Waktu update terakhir |

### Tabel: users
| Kolom | Tipe | Keterangan |
|-------|------|-----------|
| id | INTEGER PRIMARY KEY | ID unik |
| username | TEXT UNIQUE | Username login |
| password | TEXT | Password login |
| nama | TEXT | Nama lengkap |
| role | TEXT | admin atau user |
| createdAt | DATETIME | Waktu pembuatan |

## Troubleshooting

### Error: "Tidak dapat terhubung ke server"
- Pastikan server sudah dijalankan dengan `npm start`
- Pastikan port 3000 tidak digunakan aplikasi lain
- Periksa console browser (F12 > Console) untuk error details

### Database Tidak Tersimpan
- File database `jadwal.db` harus ada di folder yang sama dengan `server.js`
- Pastikan folder memiliki permission write

### Port 3000 Sudah Digunakan
Ubah PORT di `server.js`:
```javascript
const PORT = 3000; // Ubah ke port lain, misal 4000
```

## File-File Penting

- `server.js` - Backend server Express
- `web prototipe.html` - Frontend aplikasi
- `package.json` - Konfigurasi dependencies
- `jadwal.db` - Database SQLite (dibuat otomatis saat run pertama)

## Fitur Tambahan yang Bisa Dikembangkan

- Authentication dengan JWT
- Validasi input yang lebih ketat
- Backup database otomatis
- Export jadwal ke PDF/Excel
- Notifikasi real-time untuk perubahan jadwal
- Mobile app version

## Support

Jika ada pertanyaan atau masalah, silakan periksa console browser dan console server untuk error messages yang lebih detail.
