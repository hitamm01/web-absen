# 🎯 START HERE - Portal Pembelajaran Kelas Pintar

Selamat datang! File ini adalah entry point untuk memulai aplikasi.

---

## ⏱️ Pilih sesuai waktu Anda

### 🏃 TERBURU-BURU? (5 menit)
👉 Baca: [QUICK_START.md](QUICK_START.md)
- Copy-paste 3 command
- Aplikasi langsung jalan
- Selesai!

---

### 🚶 SANTAI? (15 menit)
👉 Baca: [SETUP_PANDUAN.md](SETUP_PANDUAN.md)
- Instalasi Node.js step-by-step
- Setup project detail
- Cara pakai aplikasi
- FAQ & troubleshooting

---

### 📚 MENYEDIAKAN WAKTU? (30 menit)
👉 Baca dalam urutan:
1. [QUICK_START.md](QUICK_START.md) - Mulai cepat
2. [README.md](README.md) - Dokumentasi lengkap
3. [VERIFICATION.md](VERIFICATION.md) - Testing checklist

---

## 🎯 PILIH BERDASARKAN ROLE

### 👨‍💼 Saya Project Manager / Boss
→ Baca: [SUMMARY.md](SUMMARY.md)
- Ringkasan perubahan
- Keuntungan database
- Tech stack

### 👨‍💻 Saya Developer / Programmer
→ Baca:
1. [README.md](README.md) - API documentation
2. [VERIFICATION.md](VERIFICATION.md) - Testing guide
3. Explore: `server.js` dan `web prototipe.html`

### 👨‍🏫 Saya User / Guru / Admin
→ Baca:
1. [QUICK_START.md](QUICK_START.md) - Mulai cepat
2. [SETUP_PANDUAN.md](SETUP_PANDUAN.md) - Panduan detail
3. Login & coba aplikasi

### 🛠️ Saya DevOps / Deployment
→ Baca:
1. [README.md](README.md) - Deployment options
2. [CHANGELOG.md](CHANGELOG.md) - Technology stack
3. [VERIFICATION.md](VERIFICATION.md) - Verification

---

## 📋 TODO LIST SETUP

Checklist untuk memastikan semua siap:

- [ ] Node.js terinstall
- [ ] PowerShell / Terminal siap
- [ ] Browse ke folder project: `cd "d:\web absen"`
- [ ] Jalankan: `npm install`
- [ ] Jalankan: `npm start`
- [ ] Buka browser: `http://localhost:3000/web%20prototipe.html`
- [ ] Login dengan: admin / admin123
- [ ] Edit jadwal dan simpan
- [ ] Refresh halaman, jadwal masih ada?
- [ ] ✅ Selesai!

---

## 🚀 QUICK START (3 LANGKAH)

```powershell
# 1. Navigate ke folder
cd "d:\web absen"

# 2. Install
npm install

# 3. Jalankan
npm start
```

Buka browser: `http://localhost:3000/web%20prototipe.html`

**Login:** admin / admin123

---

## 📁 NAVIGASI DOKUMENTASI

```
START HERE (Anda di sini)
    │
    ├─→ Terburu? → QUICK_START.md
    │
    ├─→ Santai? → SETUP_PANDUAN.md
    │
    ├─→ Developer? → README.md + VERIFICATION.md
    │
    ├─→ Ingin tahu perubahan? → SUMMARY.md + CHANGELOG.md
    │
    └─→ Index lengkap? → INDEX.md
```

---

## 🎯 FITUR UTAMA

✅ **Dashboard** - Info kelas & jadwal hari ini  
✅ **Materi** - Akses materi pelajaran  
✅ **Tugas** - Kelola tugas & submisi  
✅ **Jadwal** - Lihat & edit jadwal pelajaran  
✅ **Forum** - Diskusi antar siswa  
✅ **Absensi** - Pencatatan kehadiran  
✅ **Database** - Semua data tersimpan persistent  

---

## 🔐 LOGIN CREDENTIALS

### Admin (Edit Jadwal):
```
Username: admin
Password: admin123
```

### Student (View Only):
```
Username: andi
Password: andi123

Atau: budi, citra, dewi, eko
```

---

## ❓ COMMON ISSUES

**❌ "npm: command not found"**
→ Install Node.js dari nodejs.org

**❌ "Port 3000 already in use"**
→ Ubah PORT di server.js, atau tutup aplikasi lain

**❌ "Cannot find module"**
→ Jalankan `npm install` ulang

**❌ "Database error"**
→ Hapus jadwal.db dan jalankan server ulang

👉 Lebih banyak? Baca [SETUP_PANDUAN.md](SETUP_PANDUAN.md) troubleshooting section

---

## 🎓 LEARNING RESOURCES

- **Express.js:** https://expressjs.com/
- **SQLite:** https://www.sqlite.org/
- **Node.js:** https://nodejs.org/
- **Fetch API:** https://developer.mozilla.org/docs/Web/API/Fetch_API

---

## 📚 DOCUMENTATION FILES

| File | Untuk | Waktu |
|------|-------|-------|
| **QUICK_START.md** | Mulai cepat | 3 min |
| **SETUP_PANDUAN.md** | Setup detail | 15 min |
| **README.md** | API docs | 10 min |
| **SUMMARY.md** | Tech summary | 10 min |
| **CHANGELOG.md** | Changes detail | 15 min |
| **VERIFICATION.md** | Testing | 20 min |
| **INDEX.md** | Navigation | 5 min |

---

## ✨ WHAT'S DIFFERENT NOW?

**SEBELUM:** Data disimpan di browser localStorage
```
❌ Hilang jika cache dihapus
❌ Tidak bisa sharing antar device
❌ Kapasitas terbatas
```

**SESUDAH:** Data disimpan di SQLite Database
```
✅ Persistent di server
✅ Bisa sharing semua user
✅ Kapasitas unlimited
✅ Backup & restore mudah
```

---

## 📞 NEED HELP?

1. **Baca dokumentasi** yang sesuai (lihat tabel di atas)
2. **Buka browser console** (F12) untuk error
3. **Cek server console** (PowerShell) untuk logs
4. **Restart server** dengan Ctrl+C lalu `npm start`

---

## 🎉 SIAP?

### Pilihan 1: TERBURU-BURU
→ [QUICK_START.md](QUICK_START.md) (baca 5 menit, jalankan 2 menit)

### Pilihan 2: NORMAL
→ [SETUP_PANDUAN.md](SETUP_PANDUAN.md) (step-by-step detail)

### Pilihan 3: DEVELOPER
→ [README.md](README.md) (API & tech docs)

---

**Selamat! Aplikasi siap digunakan. Let's go! 🚀**

---

**Created:** December 18, 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅
