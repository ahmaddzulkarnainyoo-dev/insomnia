# PLAN-LANJUTAN — Logo, Foto Suasana, Animasi, & Ikon Sosmed

> Dokumen ini **melanjutkan `PLAN.md`** (plan sebelumnya, 2026-10-13) dan tidak menggantinya; bagian plan lama yang tidak disebut di sini tetap berlaku. Sumber kebenaran tetap `BLUEPRINT.md` — jika ada konflik, **BLUEPRINT.md menang**. Baru dibaca ulang untuk plan ini: `BLUEPRINT.md` (lengkap), `daftar_menu.md`, `PLAN.md`, dan seluruh `aset/` (7 file).
>
> Tanggal: 2026-10-13 · Status: **MENUNGGU PERSETUJUAN** — belum ada eksekusi (tidak ada file proyek yang diubah, tidak ada install/build/commit/push/deploy).

Konteks: repo remote `https://github.com/imamyahya489/insomnia.git` (branch `main`). Web tetap statis satu halaman, neobrutalism, Tailwind v3 CLI, deploy Vercel, **tanpa backend/QRIS/pemesanan** (BLUEPRINT 2 & 3). Sesuai BLUEPRINT 5.2, semua kode **ditulis dari nol** — tidak menyalin dari repo basis `Tiyouw/vekok-landing` yang tidak berlisensi (status tetap sesuai PLAN.md bagian 2, Jalur A).

---

## 1. Ringkasan perubahan dari plan lama

| Pertanyaan PLAN.md | Status baru | Bukti |
| --- | --- | --- |
| **Q1** foto suasana | ✅ **SELESAI** | 2 foto baru: `IMG-20261013-WA0002.jpg` (suasana malam) dan `IMG-20261013-WA0003.jpg` (gerobak/bar) |
| **Q7** logo | ✅ **SELESAI** | `IMG-20261013-WA0001.jpg` — logo tulisan "INSOMNIA" merah di latar hitam |
| Q2 identifikasi foto menu | ⏳ terbuka | (lihat bagian 8) |
| Q3 nama resmi | ⏳ terbuka | bukti makin kuat (logo resmi bertuliskan INSOMNIA), tetap butuh konfirmasi |
| Q4–Q6, Q8 | ⏳ terbuka | data pemilik belum masuk |
| Q9 link sosmed final | ➕ baru | tautan masih dummy `[ISI]` |

- Sesuai instruksi pemilik: **aset visual dianggap cukup** untuk Hero, Galeri, dan Logo → DoD "foto asli di Hero & Galeri" kini bisa dipenuhi.
- Penambahan cakupan di plan ini: **animasi vanilla** (reveal, marquee, parallax ringan, hover/tap, stamp pop — semua dengan dukungan `prefers-reduced-motion`) dan **ikon sosmed** dengan tautan dummy.
- Penamaan file mengikuti aturan PLAN.md bagian 3 (kebab-case, prefix peran: `hero-`/`suasana-`/`menu-`/`logo-`). Folder kerja tetap `assets/`; `aset/` tetap sebagai arsip sumber (diserahkan ke pemilik, BLUEPRINT 10.2).

---

## 2. Inventaris ulang `aset/` (7 file)

| File asli | Ukuran | Isi (dilihat langsung) | Nama final deskriptif | Penempatan |
| --- | --- | --- | --- | --- |
| `IMG-20261013-WA0001.jpg` | 53 KB | **Logo**: tulisan "INSOMNIA" merah gaya stempel/grunge dengan detail tengkorak, latar hitam, hampir persegi | `logo-insomnia.jpg` (+ varian `logo-insomnia-512.png`, `favicon.png`) | **Logo**: nav, hero, footer, favicon, og-image |
| `IMG-20261013-WA0002.jpg` | 133 KB | **Suasana malam**: angkringan penuh pengunjung duduk di bawah lampu temaram, meja bar depan, potret (±921×1600) | `suasana-angkringan-malam.jpg` | **Hero utama** + Galeri |
| `IMG-20261013-WA0003.jpg` | 273 KB | **Suasana gerobak/bar** dari atas: grinder berisi biji, botol sirup, susu kotak, tumpukan gelas plastik, malam hari (±1200×1600) | `suasana-gerobak-bar.jpg` | **Galeri** |
| `IMG-20261006-WA0007.jpg` | 115 KB | Es kopi susu topping popcorn karamel, cup INSOMNIA | `menu-insomnia-pop-corn.jpg` | **Menu** (keyakinan tinggi) |
| `IMG-20261006-WA0004.jpg` | 138 KB | Es kopi susu berlapis di tembok semen | `menu-iced-coffee.jpg` | **Menu** — kemungkinan Gula Aren, `[ISI]` → Q2 |
| `IMG-20261006-WA0003.jpg` | 113 KB | Es kopi lapisan sirup merah | `[ISI]` sementara `menu-iced-coffee-red.jpg` | **Menu** — Amerpeach/Berycano → Q2 |
| `IMG-20261006-WA0005.jpg` | 205 KB | Kopi panas berfoam + remah di cup kertas | `menu-hot-coffee.jpg` | **Menu** — Mont Blanc/Butterscotch → Q2 |

Catatan:
- Semua file diproses saat implementasi: lebar maks 1600 px, < 300 KB, konversi WebP (BLUEPRINT 6), disimpan di `assets/`.
- Logo JPG berlatar hitam → tampil apa adanya di dalam bingkai/badge hitam neobrutalism (tidak perlu transparansi); varian latar transparan **opsional** dan ditandai `[ISI]` (risiko artefak pada tepi grunge).
- Identifikasi isi foto saya lakukan dengan melihat langsung ketiga file baru — deskripsi di atas bukan tebakan dari nama file. Penetapan **nama menu** untuk 3 foto produk lama tetap `[ISI]` (Q2).

---

## 3. Rencana integrasi logo

Sumber: `IMG-20261013-WA0001.jpg`, diberikan pemilik → **dianggap aset milik pemilik sendiri**. Aturan keras: hanya memakai logo yang diberikan pemilik; **jangan memakai, meniru, atau menggambar ulang logo milik orang/lembaga lain**, dan jangan mengambil aset dari repo mana pun (BLUEPRINT 6: "Jangan memakai foto milik orang lain tanpa izin" — berlaku juga untuk logo).

File hasil saat implementasi (di `assets/`):
- `logo-insomnia.jpg` — asli (dipakai di hero/footer bila perlu ukuran besar).
- `logo-insomnia-512.png` — turunan 512 px untuk nav/footer/og (konversi format saja, isi identik).
- `favicon.png` — turunan kecil 32–48 px dari logo yang sama (latar hitam dibiarkan; aman untuk favicon).

Pemasangan:

| Posisi | Rencana |
| --- | --- |
| **Nav (sticky)** | Lockup: logo kecil (tinggi ±36 px) di dalam kotak border 3px + hard shadow (kotak hitam menyatu dengan `ink`), disandingkan teks nama `[ISI]` (Q3). Ikut memimpin ke `#hero`. |
| **Hero** | Logo ukuran besar (±200–280 px) sebagai "stiker/stempel" dekat judul — rotasi kecil ±3° dengan border & hard shadow, gaya stiker PLAN.md bagian 4. Tidak menutupi wajah orang di foto. |
| **Footer** | Logo kecil (±40 px) di atas teks nama + tahun 2026. |
| **Favicon** | `<link rel="icon" href="/assets/favicon.png">` + `<link rel="apple-touch-icon" href="/assets/logo-insomnia-512.png">`. |
| **OG image** | `assets/og-image.jpg` 1200×630: komposisi foto suasana (`suasana-angkringan-malam.jpg`) + logo di sudut + teks nama — teks nama hanya ditambahkan setelah Q3 terjawab; sebelumnya cukup foto + logo. Dibuat dari aset pemilik sendiri. |

Aksesibilitas: setiap `<img>` logo wajib `alt` deskriptif, mis. *"Logo tulisan INSOMNIA berwarna merah di latar hitam"* (bukan "logo"). Jika logo dipakai sebagai satu-satunya identitas di nav, teks nama `[ISI]` tetap disiapkan (screen reader + SEO). Varian PNG transparan: `[ISI]` (opsional, hanya jika pemilik minta).

---

## 4. Rencana integrasi foto suasana

**Hero utama** — `suasana-angkringan-malam.jpg` (WA0002): paling mengena ke BLUEPRINT 4.1/4.3 ("angkringan malam hari, lampu temaram, obrolan santai" + "foto asli sebagai bintang utama"). Dipakai besar (full-bleed atau panel ber-border), `fetchpriority="high"`, tanpa `loading="lazy"`.

**Galeri `#suasana`** — grid 2 foto:
1. `suasana-gerobak-bar.jpg` (WA0003) — detail gerobak/prep.
2. `suasana-angkringan-malam.jpg` (WA0002) — diulang sebagai bingkai grid agar galeri tidak berisi 1 foto *(usul; boleh di-drop jika pemilik tidak mau dobel — tidak mengubah data apa pun)*.
Keduanya `loading="lazy"`. Jika pemilik mengirim foto suasana tambahan, slot galeri tinggal ditambah.

**Section Menu** — 4 foto produk **tetap di sini** (tidak dipindah ke galeri): diletakkan dekat kelompok menu yang sesuai; caption memakai nama menu dari `daftar_menu.md` hanya setelah Q2 terjawab, sebelumnya nama ditandai `[ISI]`.

**Alt deskriptif (wajib, BLUEPRINT 6)** — usulan teks, boleh disesuaikan pemilik:
- Hero: *"Pengunjung memadati angkringan pinggir jalan pada malam hari di bawah lampu temaram"*
- Galeri 1: *"Meja gerobak angkringan berisi grinder, botol sirup, dan tumpukan gelas plastik pada malam hari"*
- Galeri 2: *"Suasana angkringan yang ramai ditemani lampu hangat di malam hari"*
- Logo: *"Logo tulisan INSOMNIA berwarna merah di latar hitam"*
- Foto menu: sebutkan isi minuman + ciri khasnya (mis. *"Es kopi susu dengan topping popcorn karamel"*), bukan "image1".

**Teknis (BLUEPRINT 6):** lebar maks 1600 px, < 300 KB, WebP dengan fallback JPEG, atribut `width`/`height` agar tidak ada layout shift, tanpa foto stok (4.3).

---

## 5. Rencana animasi (vanilla JS/CSS, tanpa library berat)

Semua ditulis sendiri (CSS keyframes/transitions + JS kecil; maksimum ±1 file `src/main.js`). Tanpa GSAP/anime.js/framer — cukup sesuai BLUEPRINT 5.3 (JS vanilla: IntersectionObserver + parallax ringan). Token animasi didefinisikan di `tailwind.config.js` (keyframes `marquee`, `stamp-pop`) dan state kustom di `src/input.css` — bukan nilai acak di HTML.

| # | Animasi | Tempat pemasangan | Implementasi vanilla |
| --- | --- | --- | --- |
| 1 | **Scroll reveal** | Judul & isi tiap section (Cerita, Suasana, Menu, Lokasi, Kontak), kartu menu | CSS: `.reveal { opacity:0; transform: translateY(16px); transition: .5s ease var(--d,0s) }` → `.reveal.is-in { opacity:1; transform:none }`. JS: `IntersectionObserver` (threshold 0.15), sekali masuk → `unobserve`. Stagger antar elemen via `style="--d:.08s"` |
| 2 | **Marquee ticker** | Bawah Hero (dan opsional di footer), teks berisi nama menu nyata dari `daftar_menu.md*` | Track berisi teks duplikat 2×, `@keyframes marquee { to { transform: translateX(-50%) } }` linear infinite ±25 dtk. CSS murni; `animation-play-state: paused` saat reduced-motion |
| 3 | **Parallax ringan** | Foto Hero & badge logo/stiker (parallax dekoratif saja, bukan konten) | JS: `scroll` listener + `requestAnimationFrame`, `translateY = scrollY * 0.15` dibatasi ±60 px, hanya untuk elemen beratribut `data-parallax`. Dilewati bila reduced-motion aktif |
| 4 | **Hover/tap neobrutalism** | Semua tombol, kartu menu, kartu sosmed, link nav | CSS: `:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 #111 }`; `:active { transform: translate(2px,2px); box-shadow: 0 0 0 #111 }` (efek "ditekan"); `:focus-visible` mendapat outline + shadow agar tetap terlihat; di layar sentuh (`@media (hover:none)`) andalkan `:active` |
| 5 | **Stamp pop** | Badge/stempel: logo stiker Hero, badge khas menu, label section | `@keyframes stamp-pop { 0% {scale:.6 rotate(-8deg); opacity:0} 70% {scale:1.06} 100% {scale:1 rotate(-3deg); opacity:1} }` dipicu IntersectionObserver menambahkan class — sekali jalan, tidak berulang |

*\*Teks marquee hanya memakai data yang ada (nama menu + kata "Insomnia" bila Q3 sudah terjawab). Dilarang mengarang tagline (BLUEPRINT 6).*

**Aturan `prefers-reduced-motion` (wajib, dipasang di `src/input.css`):**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
  .reveal { opacity: 1 !important; transform: none !important; }
  [data-parallax] { transform: none !important; }
}
```
- **JS ikut memeriksa**: `window.matchMedia('(prefers-reduced-motion: reduce)')` — bila `matches`, parallax tidak dijalankan dan elemen reveal langsung diberi `is-in` (atau observer tetap dipakai tapi tanpa transisi). Dengarkan perubahan media via `addEventListener('change', …)` agar responsif.
- **Anti-buntung tanpa JS**: konten default terlihat (tanpa `opacity:0` permanen); class `reveal` hanya aktif setelah JS menambahkan penanda di `<html>` (mis. `document.documentElement.classList.add('js')`, sehingga CSS `.js .reveal {opacity:0}`). Kalau JS gagal/matinya, semua konten tetap terbaca — penting untuk Lighthouse Accessibility dan DoD bagian 9.
- Tidak ada kilatan cepat berulang (< 0,5 dtk), tidak ada parallax besar (memicu mual/mabuk gerak), marquee menghentikan diri sendiri saat reduced-motion sehingga teks tetap terbaca.
- Verifikasi saat implementasi: DevTools → Rendering → *Emulate prefers-reduced-motion: reduce* → semua animasi mati, konten tampil utuh; uji juga dengan JS dinonaktifkan.

---

## 6. Rencana ikon sosmed (tautan dummy dulu)

**Daftar ikon** (sesuai BLUEPRINT 6: "WhatsApp / Instagram / TikTok"): **Instagram**, **TikTok**, **WhatsApp**. Tidak menambah platform lain yang tidak disebut BLUEPRINT tanpa persetujuan pemilik.

**Bentuk:** **inline SVG** yang digambar sendiri (path sederhana, ±24×24) — tanpa library ikon (Font Awesome/lucide dkk) agar tetap ringan dan bebas dependensi; SVG diberi `aria-hidden="true"` `focusable="false"` karena label sudah ada di induk `<a>`.

**Tempat pemasangan:**
1. **Section Kontak** — baris tombol besar neobrutalism (border 3px + hard shadow + efek hover/tap bagian 5): `[ikon] Instagram`, `[ikon] TikTok`, `[ikon] WhatsApp`.
2. **Footer** — baris ikon kecil (±20 px) di samping nama & tahun; warna `ink`, hover → kraft.

**Markup contoh (dummy, tidak mengarang username):**
```html
<a href="#" class="tombol-sosmed"
   aria-label="Instagram Insomnia (tautan menyusul)"
   data-sosial="instagram">
  <!-- [ISI] ganti href=# dengan https://instagram.com/<username> asli -->
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" …>…</svg>
  Instagram
</a>
```
- `href="#"` sementara; setiap anchor punya komentar `<!-- [ISI] … -->` di HTML agar gampang dicari (`Ctrl+F` "ISI" di `index.html`). Alternatif yang lebih ramah: `aria-disabled="true"` selama masih dummy agar pengguna pembaca layar tahu belum aktif.
- **Cara ganti nanti (Q9):** ubah `href` menjadi URL asli — `https://www.instagram.com/<username>/`, `https://www.tiktok.com/@<username>`, `https://wa.me/62<nomor>` — lalu tambahkan `target="_blank" rel="noopener noreferrer"`, hapus komentar `[ISI]`, hapus `aria-disabled` bila dipakai. Username/nomor **tidak boleh ditebak** (BLUEPRINT 6); tombol tetap tampil walau linknya dummy agar layout sudah final.
- **Aksesibilitas:** setiap `<a>` wajib `aria-label` yang menjelaskan tujuan, area sentuh ≥ 44×44 px, ikon tidak pernah sendirian tanpa label, `:focus-visible` terlihat (bagian 5).

---

## 7. Urutan commit lanjutan (menyambung tabel PLAN.md bagian 6)

Asumsi: commit 1–10 PLAN.md sudah/tetap berjalan sesuai urutan di sana; daftar di bawah adalah **lanjutannya**. Setiap commit yang menyentuh HTML/CSS diakhiri `npm run build` → `dist/style.css` ikut di-commit (BLUEPRINT 5.5). Repo lokal saat ini belum menunjukkan direktori `.git` (lihat bagian 10). Tidak ada push tanpa persetujuan.

| # | Pesan commit | File yang diubah/ditambah |
| --- | --- | --- |
| 11 | `assets: tambah logo & 2 foto suasana, rename deskriptif, optimasi WebP` | `assets/logo-insomnia.jpg`, `assets/suasana-angkringan-malam.jpg`, `assets/suasana-gerobak-bar.jpg` (+ varian `.webp`), `assets/favicon.png`; arsip `aset/` dibiarkan apa adanya |
| 12 | `feat: hero & galeri pakai foto suasana asli; logo di nav, hero, footer, favicon, og-image` | `index.html`, `assets/og-image.jpg`, `dist/style.css` (rebuild) |
| 13 | `feat: animasi vanilla — reveal, marquee, parallax, hover/tap, stamp pop + reduced-motion` | `src/input.css`, `src/main.js` (baru), `tailwind.config.js`, `index.html`, `dist/style.css` (rebuild) |
| 14 | `feat: ikon sosmed inline SVG dengan tautan dummy [ISI]` | `index.html`, `dist/style.css` (rebuild) |
| 15 | `feat: meta/OG final (foto+logo), robots.txt, sitemap.xml` | `index.html`, `assets/og-image.jpg`, `robots.txt`, `sitemap.xml` — *bila sudah ada dari commit 7 plan lama, ini hanya pembaruan nilai* |
| 16 | `chore: build final, cek visual 360/1280px, jalankan checklist DoD, catat sisa [ISI]` | `dist/style.css`, `BLUEPRINT.md` (bagian 6 & 11 bila ada pembaruan catatan) |

Aturan turunan (dari BLUEPRINT 8.1): satu perubahan satu commit; tanpa dependensi baru tanpa alasan tertulis (plan ini tidak menambah dependensi apa pun di luar rencana plan lama); `[ISI]` tidak pernah dihapus tanpa data pemilik; tidak menyentuh isi di luar cakupan bagian 3.

---

## 8. Update placeholder dan pertanyaan

**Selesai (dari PLAN.md):**
- ✅ **Q1 — foto suasana:** terpenuhi oleh `IMG-20261013-WA0002.jpg` (suasana malam) dan `IMG-20261013-WA0003.jpg` (gerobak/bar).
- ✅ **Q7 — logo:** terpenuhi oleh `IMG-20261013-WA0001.jpg` (logo INSOMNIA).

**Masih terbuka (daftar placeholder diperbarui — lihat tabel PLAN.md bagian 5; yang ditandai ✅ ditutup, sisanya tetap `[ISI]`):**

| ID | Yang ditanyakan | Dipakai di | Status |
| --- | --- | --- | --- |
| **Q2** | Identifikasi foto menu: `WA0003` lapisan merah = Amerpeach atau Berycano? `WA0005` panas berfoam = Mont Blanc atau Butterscotch Sea Salt? Konfirmasi `WA0004` = Gula Aren dan `WA0007` = Insomnia Pop Corn | caption & penamaan file foto menu | ⏳ terbuka |
| **Q3** | Nama resmi warkop — bukti bertambah: logo resmi dari pemilik bertuliskan **INSOMNIA**; perlu konfirmasi ejaan/capitalisasi & apakah dipakai sebagai judul halaman | nav, judul, OG, JSON-LD, teks marquee | ⏳ terbuka |
| **Q4** | Tagline (suara pemilik), cerita singkat 2–4 kalimat, nomor WhatsApp, Instagram, TikTok | Hero, Cerita, Kontak, meta | ⏳ terbuka |
| **Q5** | Alamat + patokan, link Google Maps, jam buka | Lokasi (+ JSON-LD bila jadi) | ⏳ terbuka |
| **Q6** | Ejaan "Mix Plater" — asli atau "Mix Platter"? | section Menu | ⏳ terbuka |
| **Q8** | Jalur lisensi: setuju Jalur A (bangun dari nol, tanpa salin kode repo tanpa lisensi) atau urus izin tertulis? *(plan ini tetap asumsi Jalur A)* | BLUEPRINT 11 | ⏳ terbuka |
| **Q9 (BARU)** | **Link sosmed final:** URL Instagram, URL TikTok, nomor WhatsApp `wa.me` — dikirim kapan saja, lalu mengganti `href` dummy (bagian 6) | section Kontak, footer | ⏳ terbuka |

Masih berlaku juga dari PLAN.md: placeholder **URL domain final** (canonical/sitemap/OG) diisi setelah deploy pertama tayang. Aturan tetap: jangan mengarang data apa pun (BLUEPRINT 6).

---

## 9. Update checklist DoD (BLUEPRINT bagian 9) yang terdampak

Item PLAN.md bagian 7 tetap berlaku; yang berubah status/rencananya:

- [ ] **"Foto asli dipakai di Hero dan Galeri, semua punya `alt`"** → kini **bisa terpenuhi**: Hero = `suasana-angkringan-malam.jpg`, Galeri = `suasana-gerobak-bar.jpg` (+ foto hero), Menu = 4 foto produk — semua dengan alt usulan bagian 4. *Rencana berubah dari "sementara foto produk" menjadi foto suasana asli.*
- [ ] **(tambahan) Logo terpasang di nav, hero, footer, favicon, dan og-image** — hanya memakai aset milik pemilik (bagian 3).
- [ ] **(tambahan) Semua animasi menghormati `prefers-reduced-motion` dan konten tetap terbaca tanpa JS** — diverifikasi via DevTools (bagian 5); mendukung poin "Lighthouse Accessibility ±90" dan "teks terbaca".
- [ ] **(tambahan) Ikon sosmed tampil di Kontak & Footer dengan `aria-label`; `href` dummy `[ISI]` tercatat** — DoD mengizinkan placeholder yang "sengaja dibiarkan dan dicatat"; catatan masuk ke tabel bagian 8 + BLUEPRINT 6 saat implementasi.
- [ ] **"Judul halaman, meta description, dan gambar OG terisi"** → og-image kini bisa final (foto suasana + logo); judul/meta menunggu Q3.
- [ ] **"Semua placeholder `[ISI]` terisi, atau sengaja dibiarkan dan dicatat"** → daftar pemantau: Q2–Q6, Q8, Q9, URL domain.
- [ ] Item lain (tanpa sisa VEKOK, 360/1280 px, kontras matahari, `dist/style.css` ter-commit, tanpa kredensial, anti AI slop) **tidak berubah** — tetap sesuai PLAN.md bagian 7.

---

## 10. Catatan remote

- **`origin` = `https://github.com/imamyahya489/insomnia.git`, branch `main`** (sesuai informasi pemilik).
- Pengecekan folder kerja saat plan ini dibuat: isi root hanya `aset/`, `BLUEPRINT.md`, `daftar_menu.md`, `PLAN.md`, `PLAN-LANJUTAN.md` — **belum ada direktori `.git` yang terlihat**. Saat eksekusi: verifikasi dulu; bila memang belum ada → `git init -b main`, `git remote add origin https://github.com/imamyahya489/insomnia.git`, lanjutkan urutan commit PLAN.md (1–10) + plan ini (11–16) di branch `main`.
- **Push hanya setelah disetujui** pemilik. Setiap push ke `main` = tayang otomatis di Vercel (BLUEPRINT 10.1) — karena itu push dijadwalkan paling akhir, setelah checklist DoD dijalankan dan dilaporkan. Tidak ada token/kredensial yang boleh masuk repo.
- Deploy Vercel (import repo, preset Other, tanpa env, tanpa build command selama `dist/` sudah di-commit) tetap mengikuti BLUEPRINT 10.1 dan hanya bila pemilik meminta.

— Akhir plan lanjutan. Menunggu persetujuan pemilik (dan jawaban Q2–Q6, Q8, Q9 kapan pun datang) sebelum eksekusi commit 11.
