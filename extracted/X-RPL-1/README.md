# X RPL-1 — Website Kelas

Website resmi kelas **X RPL-1**, Rekayasa Perangkat Lunak, SMK Negeri 9 Medan, tahun 2026.

Dibangun dengan HTML5, CSS3, dan Vanilla JavaScript — tanpa framework, tanpa backend, ringan dan cepat diakses di semua perangkat.

## 📁 Struktur Folder

```
X-RPL-1/
│
├── index.html                 # Halaman beranda
│
├── pages/
│   ├── struktur.html          # Struktur kelas
│   ├── siswa.html             # Daftar seluruh siswa (search + filter)
│   ├── tentang.html           # Tentang kelas
│   └── galeri.html            # Galeri foto + lightbox
│
├── css/
│   ├── style.css              # Design tokens, layout, komponen
│   ├── responsive.css         # Breakpoint 1920 → 360px
│   └── animations.css         # Keyframes & prefers-reduced-motion
│
├── js/
│   ├── main.js                # Navbar scroll state, active link, lightbox
│   ├── typing.js               # Animasi typing di hero
│   ├── navbar.js               # Hamburger menu mobile
│   ├── animation.js            # Fade-in saat scroll (IntersectionObserver)
│   └── siswa.js                # Data siswa + search + filter gender
│
├── assets/
│   ├── images/
│   │   ├── foto-kelas.jpg      # Foto kelas
│   │   └── logo-rpl1.png       # Logo kelas
│   └── icons/                  # (folder cadangan untuk ikon tambahan)
│
└── README.md
```

## 🚀 Cara Menjalankan

Website ini murni statis (HTML/CSS/JS), tidak butuh server khusus.

**Cara 1 — buka langsung:**
Klik dua kali `index.html`, akan terbuka di browser.

**Cara 2 — local server (disarankan agar semua path bekerja optimal):**

```bash
# Python
python3 -m http.server 8000

# lalu buka http://localhost:8000
```

Atau gunakan ekstensi *Live Server* di VS Code.

## 🖼️ Lokasi Asset

| Asset       | Lokasi                              | Digunakan di                                   |
|-------------|--------------------------------------|-------------------------------------------------|
| Foto kelas  | `assets/images/foto-kelas.jpg`      | Hero (beranda), Galeri                          |
| Logo kelas  | `assets/images/logo-rpl1.png`       | Navbar, Hero, Footer, Galeri, Favicon           |

## ✏️ Cara Mengganti Instagram Kelas

Cari teks berikut di semua file HTML (`index.html`, `pages/*.html`) dan ganti keduanya:

```html
<a href="https://www.instagram.com/moonfairy.xrpl.1" ...>
```
Ganti URL di atas, lalu ganti teks `@moonfairy.xrpl.1` yang muncul di navbar, section sosial media, dan footer.

## ✏️ Cara Mengganti Instagram Developer

Sama seperti di atas, cari:

```html
<a href="https://instagram.com/bintz_bintang11" ...>
```

Ganti URL-nya, lalu ganti teks `@bintz_bintang11` di section sosial media (beranda) dan footer semua halaman.

## ✏️ Cara Mengganti Data Siswa

Buka file `js/siswa.js`. Data siswa berbentuk array objek di bagian atas file:

```js
const students = [
  { no: 1, name: "Nama Siswa", gender: "P" },
  // ...
  { no: 14, name: "Nama Developer", gender: "L", title: "DEVELOPER" },
];
```

- Tambah/edit/hapus baris untuk mengubah daftar siswa.
- `gender` hanya menerima `"L"` (laki-laki) atau `"P"` (perempuan).
- Properti `title` **hanya** boleh ditambahkan pada satu siswa (developer website). Jangan menambahkan `title` pada siswa lain.
- Struktur kelas (wali kelas, ketua, dst.) berada langsung di dalam `pages/struktur.html` dan `index.html` — cari elemen dengan class `.struktur-card` untuk mengubahnya.

## ✏️ Cara Mengganti Foto Kelas

1. Siapkan foto baru, sebaiknya rasio landscape (mis. 1600×900px atau lebih).
2. Beri nama file persis: `foto-kelas.jpg`.
3. Ganti file lama di `assets/images/foto-kelas.jpg` dengan file baru (nama & ekstensi harus sama, atau update semua path `src="...foto-kelas.jpg"` di HTML jika format berbeda).

## ✏️ Cara Mengganti Logo

1. Siapkan logo baru, sebaiknya PNG transparan, persegi (mis. 500×500px).
2. Beri nama file persis: `logo-rpl1.png`.
3. Ganti file lama di `assets/images/logo-rpl1.png` dengan file baru.
4. Logo otomatis terpakai ulang di navbar, hero, footer, galeri, dan favicon karena semua merujuk ke path yang sama.

## 🎨 Design Tokens

Semua warna, spacing, dan radius diatur lewat CSS variables di `css/style.css` (`:root`), sehingga mengubah satu variabel akan konsisten ke seluruh halaman:

```css
--bg        /* warna latar utama */
--surface   /* warna card/permukaan */
--text      /* warna teks utama */
--muted     /* warna teks sekunder */
--border    /* warna garis pembatas */
--accent    /* warna aksen (teal) */
```

## ♿ Aksesibilitas & Performa

- Semantic HTML5, `alt` text pada semua gambar, navigasi keyboard, dan `focus-visible` state.
- Mendukung `prefers-reduced-motion` — animasi otomatis dinonaktifkan untuk pengguna yang mengaktifkan pengaturan tersebut.
- Tanpa framework/library besar — hanya Google Fonts (Space Grotesk, Inter, JetBrains Mono) via CDN.
- Responsive penuh dari 360px hingga 1920px ke atas, tanpa horizontal scroll.

---

© 2026 X RPL-1 — Rekayasa Perangkat Lunak, SMK Negeri 9 Medan.
Dibuat oleh **Bintang Al-Haq Syahputra Simanungkalit** (Developer).
