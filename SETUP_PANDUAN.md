# PANDUAN SETUP APLIKASI - PORTAL PEMBELAJARAN KELAS PINTAR

## ✅ Langkah-Langkah Setup

### LANGKAH 1: Download dan Install Node.js
1. Kunjungi https://nodejs.org/ 
2. Download LTS version (Long Term Support)
3. Jalankan installer dan ikuti panduan
4. Untuk verifikasi, buka PowerShell dan ketik:
   ```
   node --version
   npm --version
   ```

### LANGKAH 2: Siapkan Folder Project
1. Folder `d:\web absen` sudah siap dengan file:
   - `server.js` (backend)
   - `web prototipe.html` (frontend)
   - `package.json` (konfigurasi)

### LANGKAH 3: Install Dependencies
1. Buka PowerShell
2. Navigasi ke folder project:
   ```powershell
   cd "d:\web absen"
   ```
3. Install packages yang diperlukan:
   ```powershell
   npm install
   ```
4. Tunggu sampai selesai (akan ada folder `node_modules` terbuat)

### LANGKAH 4: Jalankan Server
1. Di PowerShell yang sama, jalankan:
   ```powershell
   npm start
   ```
   
2. Anda akan melihat output:
   ```
   Database SQLite terhubung
   Tabel jadwal berhasil dibuat/sudah ada
   Tabel users berhasil dibuat/sudah ada
   Server berjalan di http://localhost:3000
   ```

### LANGKAH 5: Buka Aplikasi di Browser
1. Buka browser (Chrome, Firefox, Edge, dll)
2. Kunjungi: `http://localhost:3000/web%20prototipe.html`
3. Atau ketik di address bar: `localhost:3000` dan tunggu loading

### LANGKAH 6: Login ke Aplikasi

**Sebagai Admin (untuk edit jadwal):**
- Username: `admin`
- Password: `admin123`

**Sebagai Siswa:**
- Username: `andi` (atau budi, citra, dewi, eko)
- Password: `andi123` (sesuai username)

---

## 📝 Cara Menggunakan Edit Jadwal

### Sebagai Admin:
1. Login dengan akun admin
2. Klik menu "Jadwal" di navigasi
3. Klik tombol "Edit Jadwal" (tombol ini hanya muncul untuk admin)
4. Isi form:
   - **Hari**: Pilih hari (Senin-Jumat)
   - **Waktu**: Pilih waktu pelajaran
   - **Mata Pelajaran**: Pilih dari dropdown (wajib)
   - **Guru Pengampu**: Nama guru (opsional)
   - **Ruangan**: Nama ruangan/lab (opsional)
5. Klik "Simpan Perubahan"
6. Tabel jadwal akan otomatis terupdate menampilkan perubahan
7. Perubahan tersimpan di database SQLite

---

## ⚠️ Troubleshooting

### Problem: "npm: Istilah 'npm' tidak dikenali"
**Solusi**: 
- Node.js belum terinstall dengan benar
- Restart PowerShell setelah install Node.js
- Tambahkan Node.js ke PATH di Environment Variables

### Problem: "Error: Cannot find module 'express'"
**Solusi**:
- Jalankan `npm install` di folder yang benar
- Pastikan Anda di folder `d:\web absen`

### Problem: "Error: EADDRINUSE: address already in use :::3000"
**Solusi**:
- Port 3000 sudah digunakan aplikasi lain
- Jalankan server di port berbeda:
  - Buka `server.js`
  - Ubah `const PORT = 3000;` menjadi `const PORT = 4000;`
  - Simpan dan jalankan kembali

### Problem: "Tidak dapat terhubung ke server"
**Solusi**:
- Periksa apakah server masih running di PowerShell
- Buka browser console (F12) dan lihat error message
- Restart server dengan Ctrl+C lalu `npm start` kembali

### Problem: Database error / perubahan tidak tersimpan
**Solusi**:
- Periksa apakah ada file `jadwal.db` di folder project
- Hapus `jadwal.db` untuk reset database (jadwal akan kembali default)
- Jalankan server kembali

---

## 🗄️ Database

Database SQLite otomatis dibuat dengan nama `jadwal.db` di folder project.

Struktur tabel jadwal:
- `id` - ID unik
- `hari` - Hari pelajaran
- `waktu` - Jam pelajaran  
- `mataPelajaran` - Nama pelajaran
- `guru` - Nama guru
- `ruangan` - Lokasi kelas
- `createdAt` - Tanggal dibuat
- `updatedAt` - Tanggal diupdate

---

## 🔧 File Penting

- **server.js** - Backend server Express.js
- **web prototipe.html** - Aplikasi frontend
- **package.json** - Daftar dependencies
- **jadwal.db** - Database SQLite (dibuat otomatis)
- **README.md** - Dokumentasi lengkap

---

## 📚 API Endpoints

Jika ingin test API secara langsung:

**Ambil semua jadwal:**
```
GET http://localhost:3000/api/jadwal
```

**Ambil jadwal Senin:**
```
GET http://localhost:3000/api/jadwal/Senin
```

**Tambah/Update jadwal (POST):**
```
POST http://localhost:3000/api/jadwal
Content-Type: application/json

{
  "hari": "Senin",
  "waktu": "07:30 - 09:00",
  "mataPelajaran": "Matematika",
  "guru": "Bu Ani",
  "ruangan": "Ruang 101"
}
```

---

## 💡 Tips

1. **Biarkan server running** - Jangan tutup PowerShell saat menggunakan aplikasi
2. **Cek console browser** - Tekan F12 untuk debugging jika ada error
3. **Port 3000** - Pastikan tidak digunakan aplikasi lain
4. **Database persistent** - Semua perubahan jadwal otomatis tersimpan di `jadwal.db`

---

## ❓ Bantuan Lebih Lanjut

Jika masih ada masalah:
1. Baca error message di console (F12 di browser)
2. Cek PowerShell tempat server running
3. Restart server (Ctrl+C lalu `npm start`)
4. Hapus folder `node_modules` dan jalankan `npm install` ulang

Selamat! Aplikasi Anda sudah siap digunakan! 🎉
