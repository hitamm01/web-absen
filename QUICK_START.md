# QUICK START - MULAI DALAM 3 MENIT

## 📦 Prasyarat
- Node.js sudah terinstall (download di nodejs.org jika belum)

## ⚡ 3 Langkah Cepat

### 1️⃣ Buka PowerShell dan jalankan:
```powershell
cd "d:\web absen"
npm install
```

### 2️⃣ Jalankan server:
```powershell
npm start
```

Tunggu sampai melihat:
```
Server berjalan di http://localhost:3000
```

### 3️⃣ Buka browser:
```
http://localhost:3000/web%20prototipe.html
```

---

## 🔑 Login Akun Test

### Admin (bisa edit jadwal):
```
Username: admin
Password: admin123
```

### Siswa:
```
Username: andi
Password: andi123
```

---

## 📍 Edit Jadwal

1. Login sebagai admin
2. Klik menu "Jadwal"
3. Klik tombol "Edit Jadwal"
4. Isi form dan simpan
5. ✅ Jadwal terupdate dan tersimpan di database!

---

## ⚠️ Jika Ada Error

**Error: "npm: Istilah tidak dikenali"**
→ Install Node.js ulang dan restart PowerShell

**Error: "Port 3000 already in use"**
→ Aplikasi lain pakai port 3000, ubah di server.js line 5 `const PORT = 4000`

**Error: "Cannot find module"**
→ Jalankan `npm install` ulang

---

## 📚 Dokumentasi Lengkap
- Baca `README.md` untuk dokumentasi API
- Baca `SETUP_PANDUAN.md` untuk panduan detail
- Baca `CHANGELOG.md` untuk daftar perubahan

---

**Selesai! Aplikasi siap digunakan.** 🎉
