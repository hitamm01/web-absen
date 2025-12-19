# ✅ VERIFICATION CHECKLIST - Database Integration

Gunakan checklist ini untuk memverifikasi bahwa semua perubahan sudah bekerja dengan benar.

---

## 📋 Pre-Installation Checks

- [ ] Node.js sudah terinstall
  ```powershell
  node --version
  ```
  Output seharusnya: v14.0.0 atau lebih baru

- [ ] npm sudah terinstall
  ```powershell
  npm --version
  ```
  Output seharusnya: 6.0.0 atau lebih baru

---

## 🔧 Installation Verification

### Step 1: Install Dependencies
```powershell
cd "d:\web absen"
npm install
```

- [ ] Command selesai tanpa error
- [ ] Folder `node_modules` terbuat
- [ ] File `package-lock.json` terbuat

### Step 2: Verify Installed Packages
```powershell
npm list
```

- [ ] express versi 4.18.2 atau lebih baru
- [ ] sqlite3 versi 5.1.6 atau lebih baru
- [ ] cors versi 2.8.5 atau lebih baru

---

## 🚀 Server Startup Verification

### Step 3: Jalankan Server
```powershell
npm start
```

Tunggu sampai melihat output:
```
Database SQLite terhubung
Tabel jadwal berhasil dibuat/sudah ada
Tabel users berhasil dibuat/sudah ada
Server berjalan di http://localhost:3000
```

- [ ] Semua 4 pesan di atas muncul
- [ ] Tidak ada error di console
- [ ] Server ready menerima requests

---

## 🌐 API Verification

Buka terminal baru (jangan tutup server), test endpoints:

### Test 1: GET all jadwal
```powershell
Invoke-WebRequest -Uri http://localhost:3000/api/jadwal -Method GET | ConvertTo-Json
```

- [ ] Status code 200
- [ ] Response adalah JSON array (bisa kosong)

### Test 2: POST new jadwal
```powershell
$body = @{
    hari = "Senin"
    waktu = "07:30 - 09:00"
    mataPelajaran = "Matematika"
    guru = "Bu Ani"
    ruangan = "Ruang 101"
} | ConvertTo-Json

Invoke-WebRequest -Uri http://localhost:3000/api/jadwal -Method POST `
    -ContentType "application/json" -Body $body | ConvertTo-Json
```

- [ ] Status code 201
- [ ] Response message berhasil
- [ ] ID jadwal dikembalikan

### Test 3: GET jadwal yang baru dibuat
```powershell
Invoke-WebRequest -Uri http://localhost:3000/api/jadwal -Method GET | ConvertTo-Json
```

- [ ] Array sekarang berisi 1 item jadwal
- [ ] Data sesuai dengan yang dikirim

---

## 🖥️ Frontend Verification

### Step 4: Buka Aplikasi

1. Buka browser (Chrome, Firefox, Edge)
2. Ketik: `http://localhost:3000/web%20prototipe.html`
3. Tekan Enter

- [ ] Halaman login muncul
- [ ] Logo dan form login terlihat
- [ ] Tidak ada error di console (F12)

### Step 5: Login Verification

**Login sebagai Admin:**
- [ ] Username: admin
- [ ] Password: admin123
- [ ] Login berhasil, halaman main-app tampil
- [ ] Dashboard terlihat
- [ ] Navigation menu terlihat

---

## 📍 Edit Jadwal Feature Verification

### Step 6: Test Edit Jadwal (As Admin)

1. Klik menu "Jadwal"
   - [ ] Halaman jadwal muncul
   - [ ] Tabel jadwal terlihat dengan data default

2. Klik tombol "Edit Jadwal"
   - [ ] Modal edit jadwal muncul
   - [ ] Form fields terlihat: Hari, Waktu, Mata Pelajaran, Guru, Ruangan

3. Isi form dengan data baru:
   ```
   Hari: Selasa
   Waktu: 09:15 - 10:45
   Mata Pelajaran: Biologi
   Guru: Bu Fina
   Ruangan: Lab Biologi
   ```

4. Klik "Simpan Perubahan"
   - [ ] Alert success muncul
   - [ ] Modal tertutup
   - [ ] Tabel jadwal terupdate
   - [ ] Selasa 09:15 - 10:45 sekarang berisi "Biologi"

5. Cek Network (F12 > Network)
   - [ ] Ada request POST ke `/api/jadwal`
   - [ ] Request status 200/201
   - [ ] Response berisi data jadwal

### Step 7: Verify Database Storage

1. Di PowerShell baru, cek database:
   ```powershell
   # Jalankan query SELECT
   Invoke-WebRequest -Uri http://localhost:3000/api/jadwal -Method GET | 
        ConvertFrom-Json | ConvertTo-Json | Write-Host
   ```

   - [ ] Jadwal Biologi ada di dalam response
   - [ ] Data sudah persistent di database

2. Refresh halaman browser (F5)
   - [ ] Jadwal Biologi masih ada
   - [ ] Data tidak hilang setelah refresh

3. Logout dan login ulang
   - [ ] Jadwal Biologi masih ada
   - [ ] Data persistent di database

---

## 👥 Multi-User Verification

### Step 8: Test Sebagai Siswa

1. Logout (klik user menu, pilih Logout)
   - [ ] Back to login page

2. Login sebagai siswa:
   - [ ] Username: andi
   - [ ] Password: andi123

3. Buka menu "Jadwal"
   - [ ] Tabel jadwal tampil
   - [ ] Jadwal Biologi yang diedit admin terlihat
   - [ ] Tombol "Edit Jadwal" tidak ada (hanya untuk admin)
   - [ ] Siswa bisa view tapi tidak bisa edit

---

## 🔄 Data Persistence Verification

### Step 9: Server Restart Test

1. Shutdown server (Ctrl+C di PowerShell server)
   - [ ] Server stops

2. Jalankan server ulang:
   ```powershell
   npm start
   ```
   - [ ] Server starts successfully
   - [ ] Database messages muncul

3. Buka browser, login, buka jadwal
   - [ ] Jadwal Biologi masih ada
   - [ ] Semua perubahan sebelumnya tersimpan

---

## 📊 Database Files Verification

### Step 10: Check Database Files

1. Buka File Explorer
2. Navigate ke `d:\web absen`
3. Lihat files yang ada:
   - [ ] `jadwal.db` file ada (size > 0 KB)
   - [ ] File dibuat/dimodifikasi hari ini
   - [ ] `node_modules` folder ada
   - [ ] `server.js` file ada
   - [ ] `web prototipe.html` file ada

---

## 🐛 Error Handling Verification

### Step 11: Test Error Scenarios

**Scenario 1: Server Down**
1. Shutdown server
2. Di browser, coba edit jadwal
   - [ ] Error message muncul: "Tidak dapat terhubung ke server"
   - [ ] Halaman jadwal masih bisa dilihat dengan data default

**Scenario 2: Invalid Data**
1. Jalankan server
2. Edit jadwal tapi jangan pilih Mata Pelajaran
3. Klik Simpan
   - [ ] Alert: "Pilih mata pelajaran terlebih dahulu!"
   - [ ] Modal tetap terbuka

---

## 📱 Console Debugging Verification

### Step 12: Check Browser Console

1. Buka browser DevTools (F12)
2. Tab Console
3. Edit jadwal dan simpan
   - [ ] Tidak ada error messages
   - [ ] Hanya ada log atau network activity
   - [ ] Jadwal terupdate tanpa error

---

## 📝 Final Verification Summary

Tandai status dari setiap area:

| Area | Status | Notes |
|------|--------|-------|
| Node.js + npm | ✅ / ❌ | |
| Dependencies install | ✅ / ❌ | |
| Server startup | ✅ / ❌ | |
| API endpoints | ✅ / ❌ | |
| Database creation | ✅ / ❌ | |
| Frontend loading | ✅ / ❌ | |
| Admin login | ✅ / ❌ | |
| Edit jadwal feature | ✅ / ❌ | |
| Data persistence | ✅ / ❌ | |
| Multi-user access | ✅ / ❌ | |
| Database persistence | ✅ / ❌ | |
| Error handling | ✅ / ❌ | |
| Console debugging | ✅ / ❌ | |

---

## ✅ All Verified Successfully!

Jika semua checklist sudah ditandai ✅, berarti:
- ✅ Database integration berhasil
- ✅ Jadwal tersimpan permanent
- ✅ Multi-user access working
- ✅ Data persistence working
- ✅ Error handling working

**Aplikasi siap untuk production use!** 🎉

---

## 🆘 Jika Ada Yang Gagal

1. Catat nomor step yang gagal
2. Cek error message di console
3. Baca README.md atau SETUP_PANDUAN.md
4. Try step tersebut ulang
5. Jika masih gagal, reset:
   ```powershell
   # Hapus database
   Remove-Item jadwal.db -Force -ErrorAction SilentlyContinue
   
   # Restart npm packages
   Remove-Item node_modules -Recurse -Force
   npm install
   npm start
   ```

---

**Verification Date:** December 18, 2025  
**Version:** 1.0.0
