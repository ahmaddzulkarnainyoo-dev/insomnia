# BLUEPRINT — Web Statis Angkringan {{NAMA_WARKOP}}

> Dokumen ini adalah sumber kebenaran proyek. Dibaca oleh manusia (pemilik, developer pengganti) dan AI agent (Gemini, Cline, dll). Jika ada konflik antara dokumen ini dan asumsi Anda, **dokumen ini menang**. Jika dokumen ini kurang jelas, tanya pemilik, jangan mengarang.

---

## 1. Ringkasan

| Item | Isi |
| --- | --- |
| Jenis | Website statis satu halaman (landing page) untuk dipamerkan |
| Bisnis | Angkringan/warkop pinggir jalan, tempat duduk memakai kursi gunung (kursi camping) |
| Tujuan | Menampilkan suasana, menu, lokasi, jam buka, dan kontak. Bukan untuk transaksi |
| Pemilik | {{NAMA_PEMILIK}} |
| Hosting | Vercel (static, tanpa server) |
| Domain | Belum ada. Memakai alamat `*.vercel.app` dulu |
| Basis kode | `Tiyouw/vekok-landing` (lihat bagian 5, ada gerbang lisensi) |

---

## 2. Keputusan yang sudah dikunci

1. Web **statis**. Tidak ada backend, database, login, atau keranjang.
2. **Tidak ada pemesanan dan tidak ada pembayaran (QRIS)** di versi ini.
3. Tanpa domain berbayar di tahap awal.
4. Harga dan foto menu menyusul. Sebelum tersedia, pakai placeholder yang jelas (lihat bagian 6).
5. Tampilan harus terasa **buatan tangan dan lokal**, bukan template generik "AI slop" (aturan di bagian 4).
6. Penyesuaian visual akhir dilakukan dengan memasukkan foto asli warkop ke AI (Gemini) berdasarkan dokumen ini.

## 3. Di luar cakupan (jangan dikerjakan tanpa persetujuan pemilik)

- Sistem pesan online, QRIS, payment gateway, kasir/POS
- Supabase, database apa pun, form yang menyimpan data
- Blog, multi-bahasa, akun pengguna, analytics berat
- Mengganti stack (jangan migrasi ke framework JS lain tanpa alasan kuat)

Jika kelak pemilik ingin fitur di atas, itu proyek terpisah dan harus mulai dengan pembaruan dokumen ini.

---

## 4. Arahan visual

### 4.1 Karakter
Angkringan pinggir jalan di malam hari: lampu temaram, gerobak, kursi gunung, gelas dan teko, obrolan santai. Hangat, jujur, sedikit berantakan dengan sengaja.

### 4.2 Gaya acuan (dari repo basis)
Zine / warkop brutalism: border hitam tebal, hard shadow (tanpa blur), tekstur halftone dot, marquee ticker, badge ala stempel/stiker, aksen warna kraft `#D49B45`. Font acuan: Syne, Space Grotesk, Plus Jakarta Sans.
stylenya  neobrutalism

### 4.3 Aturan anti "AI slop"
Dilarang:
- Gradien ungu-biru, glassmorphism, glow neon
- Kartu seragam dengan ikon emoji sebagai dekorasi utama
- Teks pemasaran generik ("Nikmati pengalaman kopi terbaik")
- Foto stok kopi artisan bila foto asli tersedia
- Layout hero-tiga-kolom-testimoni yang identik dengan ribuan template

Wajib:
- Foto asli warkop (kursi gunung, gerobak, suasana jalan) sebagai bintang utama
- Copywriting dengan suara pemilik: kasual, bahasa sehari-hari, boleh campur logat setempat
- Detail yang hanya dimiliki tempat ini (nama menu khas, cerita, lokasi spesifik)
- Kontras teks tinggi dan mudah dibaca di HP di tengah cahaya terang

### 4.4 Palet (awal, boleh disesuaikan dengan foto)
| Peran | Nilai awal |
| --- | --- |
| Latar | Krem/kertas hangat |
| Teks & border | Hitam `#111111` |
| Aksen utama | Kraft `#D49B45` |
| Aksen kedua | Ambil dari foto (mis. warna kursi gunung) |

Semua warna ditaruh sebagai token di `tailwind.config.js`, bukan ditulis berulang di HTML.

---

## 5. Basis kode

### 5.1 Repo basis
`https://github.com/Tiyouw/vekok-landing` — landing page statis warkop, dibuat dari ekspor Google Stitch, diubah jadi source siap produksi.

### 5.2 GERBANG LISENSI (kerjakan paling pertama)
Sebelum menyalin satu baris kode pun:
1. Buka file `LICENSE` di repo tersebut.
2. **Jika lisensinya permisif** (MIT, Apache-2.0, BSD): boleh dipakai. Simpan teks lisensi dan atribusi sesuai syaratnya.
3. **Jika tidak ada lisensi atau lisensinya membatasi**: jangan salin kode. Hubungi pemilik repo untuk izin tertulis, atau bangun dari nol dengan repo itu hanya sebagai **referensi gaya dan struktur** (bukan salinan).
4. Catat hasilnya di bagian 11 (Log Keputusan).

### 5.3 Stack
| Bagian | Pilihan |
| --- | --- |
| Markup | `index.html` statis, tanpa framework JS |
| CSS | Tailwind CSS v3 (CLI build) menghasilkan `dist/style.css` |
| Font | Google Fonts |
| JS | Vanilla: IntersectionObserver (reveal) dan parallax ringan |
| Hosting | Vercel, static, tanpa framework preset |

### 5.4 Struktur file (menurut README repo basis, verifikasi setelah clone)
```
.
├── index.html          # halaman tunggal, ±7 section
├── src/input.css       # entry Tailwind + komponen kustom
├── tailwind.config.js  # warna, font, animasi brand
├── dist/style.css      # hasil build (di-commit)
├── robots.txt
└── sitemap.xml
```

### 5.5 Build (verifikasi di `package.json` sebelum dijalankan)
```bash
npm install
# cari script build/dev di package.json, lalu jalankan
npm run build
```
Jika tidak ada script, pakai Tailwind CLI:
```bash
npx tailwindcss -i ./src/input.css -o ./dist/style.css --minify
```
`dist/style.css` harus selalu dibangun ulang dan di-commit setelah mengubah HTML atau konfigurasi.

---

## 6. Konten dan aset

Semua nilai di bawah **belum diisi**. Jangan mengarang. Gunakan placeholder bertanda `[ISI]` sampai pemilik memberi data.

| Item | Status | Nilai |
| --- | --- | --- |
| Nama tempat | [ISI] | {{NAMA_WARKOP}} |
| Tagline (suara pemilik) | [ISI] | |
| Cerita singkat (2–4 kalimat) | [ISI] | |
| Alamat dan patokan lokasi | [ISI] | |
| Link Google Maps | [ISI] | |
| Jam buka | [ISI] | |
| WhatsApp / Instagram / TikTok | [ISI] | |
| Daftar menu | Menyusul | |
| Harga | Menyusul | |
| Foto suasana (kursi gunung, gerobak, malam hari) | Menyusul | |
| Foto menu | Menyusul | |
| Logo (jika ada) | [ISI] | |

### Aturan aset
- Foto disimpan di `public/` atau `images/` (ikuti struktur repo), format WebP/JPEG, **lebar maksimal 1600 px**, usahakan di bawah 300 KB per foto.
- Setiap gambar wajib punya `alt` yang deskriptif ("Deretan kursi gunung di depan gerobak angkringan malam hari"), bukan "image1".
- Jangan memakai foto milik orang lain tanpa izin.
- Harga ditulis sebagai teks biasa agar gampang diedit, mis. `Rp 5.000`.

---

## 7. Struktur halaman (usulan, sesuaikan dengan 7 section repo basis)

1. **Hero** — nama tempat, tagline, satu foto kuat, marquee ticker
2. **Cerita** — siapa, kenapa, sejak kapan
3. **Suasana** — galeri foto (kursi gunung, gerobak, jalan)
4. **Menu** — kelompok menu dengan harga (placeholder dulu)
5. **Lokasi & jam buka** — alamat, peta (link ke Google Maps, bukan embed berat), jam
6. **Kontak** — tombol WhatsApp dan sosial media (hanya link, bukan form)
7. **Footer** — nama tempat dan tahun

Navigasi sticky di HP harus ringkas dan tidak menutupi konten.

---

## 8. Panduan untuk AI agent (Gemini, Cline, dll)

### 8.1 Aturan kerja
1. Baca dokumen ini sampai habis sebelum mengubah apa pun.
2. Lakukan gerbang lisensi (5.2) bila belum tercatat di bagian 11.
3. Ubah **sedikit file, bertahap**. Satu perubahan, satu commit dengan pesan jelas.
4. Jangan menambah dependensi baru tanpa alasan tertulis di commit.
5. Jangan menyentuh hal di bagian 3 (di luar cakupan).
6. Jangan menghapus atau mengubah fakta di bagian 6 tanpa data dari pemilik.
7. Setelah mengubah HTML/CSS: build ulang `dist/style.css`, cek di lebar 360 px dan 1280 px.
8. Jika ragu, berhenti dan tanyakan, jangan menebak.

### 8.2 File yang boleh diubah
`index.html`, `src/input.css`, `tailwind.config.js`, aset gambar, `sitemap.xml`, `robots.txt`, dokumen ini (bagian 6 dan 11).

### 8.3 Alur khusus Gemini (penyesuaian dengan foto asli)
1. Kirim dokumen ini + foto-foto warkop sekaligus.
2. Minta Gemini: (a) menyarankan palet dari foto, (b) memilih foto untuk Hero dan Galeri, (c) menulis ulang copy dengan suara pemilik berdasarkan data bagian 6, (d) menghasilkan perubahan `index.html` dan `tailwind.config.js` yang patuh pada bagian 4.
3. Periksa hasilnya terhadap checklist bagian 9 sebelum dipakai.

Contoh prompt:
```
Baca BLUEPRINT.md terlampir. Gunakan foto warkop terlampir sebagai bahan utama.
Sesuaikan index.html dan tailwind.config.js dengan arahan visual bagian 4.
Jangan menambah fitur di luar bagian 2. Tulis copy dengan nada kasual pemilik.
Beri tahu bagian mana yang masih placeholder karena datanya belum ada.
```

### 8.4 Alur khusus Cline
1. Buka folder proyek, baca dokumen ini lebih dulu.
2. Jalankan build (5.5), lihat hasil lokal, lalu ubah per bagian halaman (bagian 7).
3. Sebelum selesai, jalankan checklist bagian 9 dan laporkan item yang gagal.

---

## 9. Checklist selesai (Definition of Done)

- [ ] Lisensi basis kode sudah dicek dan dicatat
- [ ] Semua placeholder `[ISI]` terisi, atau sengaja dibiarkan dan dicatat
- [ ] Tidak ada teks sisa dari warkop lain (nama VEKOK, Jember, Pasar Sabtuan, dll)
- [ ] Foto asli dipakai di Hero dan Galeri, semua punya `alt`
- [ ] Tampilan rapi di 360 px (HP) dan 1280 px (desktop)
- [ ] Teks terbaca jelas (kontras cukup) di bawah sinar matahari
- [ ] `dist/style.css` sudah dibangun ulang dan di-commit
- [ ] Judul halaman, meta description, dan gambar OG (pratinjau saat dibagikan) terisi
- [ ] Skor Lighthouse mobile (Performance, Accessibility) kira-kira 90 ke atas
- [ ] Tidak ada kunci API, kredensial, atau data pribadi di repo
- [ ] Tidak ada pelanggaran aturan anti AI slop (4.3)

---

## 10. Deploy dan serah-terima

### 10.1 Deploy ke Vercel
1. Push repo ke GitHub (akun/organisasi milik **pemilik** atau yang bisa dipindahkan).
2. Di Vercel: Import Project, pilih repo, framework preset **Other**, tanpa environment variable.
3. Jika `dist/style.css` sudah di-commit, tidak perlu build command. Jika tidak, isi build command dengan perintah Tailwind di 5.5 dan output directory sesuai struktur repo.
4. Setiap push ke `main` otomatis tayang.

### 10.2 Akses yang harus diserahkan ke pemilik
- Repo GitHub (kepemilikan atau akses admin)
- Project Vercel (undang pemilik atau pindahkan)
- Folder asli foto dan logo
- Dokumen ini

### 10.3 Update rutin tanpa developer
- **Ganti harga/menu:** edit teks di `index.html` bagian Menu, commit, tunggu Vercel tayang.
- **Ganti foto:** timpa file di folder gambar dengan nama sama, atau ubah path-nya.
- **Ganti jam buka/kontak:** edit bagian Lokasi dan Kontak.

### 10.4 Jika kelak ingin domain sendiri
Beli domain, tambahkan di Vercel (Settings, Domains), ikuti instruksi DNS. **Catatan:** jika QR code sempat dicetak mengarah ke alamat `*.vercel.app`, QR itu harus dicetak ulang setelah ganti alamat.

### 10.5 Jika kelak ingin menambah fitur
Fitur pesan, pembayaran, atau menu yang bisa diedit lewat dashboard adalah proyek baru. Mulai dengan memperbarui bagian 2 dan 3 dokumen ini, lalu pilih stack setelah kebutuhan jelas.

---

## 11. Log keputusan

| Tanggal | Keputusan | Alasan |
| --- | --- | --- |
| 2026-10-06 | Web statis, tanpa pemesanan/QRIS | Kebutuhan pemilik hanya untuk dipamerkan |
| 2026-10-06 | Basis: `Tiyouw/vekok-landing` | Vibe warkop pinggir jalan, stack statis sederhana di Vercel |
| 2026-10-06 | Penyesuaian visual via Gemini dengan foto asli | Agar hasil khas tempat ini, bukan template generik |
| _[ISI]_ | Hasil gerbang lisensi | |
