# Dokumentasi Website Tailwind CSS

Project ini adalah halaman landing page belajar yang dibuat dengan HTML dan Tailwind CSS, lalu ditambahkan interaksi sesuai modul: navbar toggle untuk mobile, validasi form, dan pengambilan data dari Public API.

## Fitur yang ditambahkan sesuai modul

### 1. Navbar toggle
- Tombol menu muncul pada tampilan mobile.
- Saat tombol diklik, menu navigasi tampil atau sembunyi.

### 2. Validasi form
- Form menggunakan `method="get"` sesuai instruksi.
- Jika input nama kosong, akan muncul pesan peringatan.
- Setelah valid, tampilkan pesan sukses.

### 3. Public API
- Data diambil dari `https://jsonplaceholder.typicode.com/users`.
- Tabel menampilkan nama, email, telepon, dan website.
- Terdapat status loading dan pesan error jika API gagal.

## Struktur file

- `index.html` : halaman utama
- `src/main.css` : konfigurasi tema Tailwind
- `src/output.css` : hasil build Tailwind
- `src/script.js` : logika interaksi JavaScript

## Menjalankan project

Pastikan Node.js sudah terpasang, lalu jalankan:

```bash
npm install
npm run build:css
```

Untuk melihat halaman, buka project dengan Live Server atau jalankan:

```bash
python -m http.server 8000
```

Lalu buka:

```text
http://localhost:8000
```

## Tema warna

```css
@theme {
  --color-brand: #7c3aed;
  --color-brand-hover: #6d28d9;
  --color-brand-soft: #ede9fe;
  --color-page: #faf8ff;
  --color-surface: #ffffff;
  --color-ink: #241a35;
  --color-muted: #71677f;
  --color-line: #ece7f5;
  --color-field-border: #c4b5fd;
  --color-footer: #241a35;
}
```
