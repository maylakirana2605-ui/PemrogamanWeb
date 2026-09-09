# Dokumentasi UI/UX Design — SIMPUS-Mini

Dokumen ini berisi rancangan User Flow dan Wireframe Teks untuk fitur lanjutan Sistem Perpustakaan Mini (SIMPUS-Mini) sebagai acuan implementasi Jobsheet berikutnya.

---

## 1. User Flow

### A. Alur Autentikasi (Login & Logout)
1. Pengguna membuka sistem -> Diarahkan ke halaman Form Login.
2. Pengguna memasukkan Username dan Password.
3. Sistem memvalidasi kredensial:
   - Jika valid: Masuk ke Dashboard Petugas.
   - Jika gagal: Tampilkan pesan peringatan kesalahan.
4. Pengguna dapat mengklik tombol Logout di navbar untuk mengakhiri sesi.

### B. Alur Transaksi Peminjaman Buku
1. Petugas membuka menu Peminjaman.
2. Petugas memilih/mengisi data anggota (NIM/ID Anggota) dan memilih buku yang dipinjam.
3. Petugas menentukan tanggal pinjam dan batas tanggal kembali.
4. Petugas menekan tombol Simpan Transaksi.
5. Sistem mencatat transaksi, mengurangi stok buku yang tersedia, dan menampilkan konfirmasi sukses.

### C. Alur Pengembalian Buku & Denda
1. Petugas membuka menu Pengembalian.
2. Petugas mencari transaksi berdasarkan ID Transaksi / NIM Anggota.
3. Sistem menampilkan detail pinjaman dan otomatis menghitung status keterlambatan/denda jika melewati batas tanggal.
4. Petugas menekan tombol Proses Pengembalian.
5. Status peminjaman diperbarui menjadi "Selesai" dan stok buku bertambah kembali.

### D. Alur Riwayat Transaksi
1. Petugas membuka menu Riwayat Peminjaman.
2. Sistem menyajikan tabel rekapitulasi seluruh transaksi peminjaman dan pengembalian.
3. Petugas dapat memfilter riwayat berdasarkan tanggal atau status transaksi.

---

## 2. Wireframe Teks

### A. Halaman Login (auth/login.html)

```text
+-------------------------------------------------------------+
|                     SIMPUS-Mini                             |
+-------------------------------------------------------------+
|                                                             |
|                   +-----------------------+                 |
|                   |      LOGIN PETUGAS    |                 |
|                   |                       |                 |
|                   | Username:             |                 |
|                   | [                   ] |                 |
|                   |                       |                 |
|                   | Password:             |                 |
|                   | [                   ] |                 |
|                   |                       |                 |
|                   | [    Masuk / Login  ] |                 |
|                   +-----------------------+                 |
|                                                             |
+-------------------------------------------------------------+
```
### B. Dashboard Petugas (admin/dashboard.html)
```text
+-------------------------------------------------------------+
| SIMPUS-Mini  [Dashboard] [Peminjaman] [Pengembalian] [Logout]|
+-------------------------------------------------------------+
|                                                             |
| Selamat Datang, [Nama Petugas]!                             |
|                                                             |
| +---------------+   +---------------+   +-----------------+ |
| | Total Buku    |   | Total Anggota |   | Sedang Dipinjam | |
| |      12       |   |       8       |   |        3        | |
| +---------------+   +---------------+   +-----------------+ |
|                                                             |
| Transaksi Terkini:                                          |
| +---------------------------------------------------------+ |
| | ID  | Peminjam       | Buku             | Tgl Pinjam    | |
| | 001 | Ahmad Fauzi    | Pemrograman Web  | 2026-09-01    | |
| +---------------------------------------------------------+ |
|                                                             |
+-------------------------------------------------------------+
```
### C. Form Peminjaman Buku (transaksi/pinjam.html)

```text
+-------------------------------------------------------------+
| SIMPUS-Mini  [Dashboard] [Peminjaman] [Pengembalian] [Logout]|
+-------------------------------------------------------------+
| Form Peminjaman Buku                                        |
|                                                             |
| Pilih Anggota : [ (Dropdown / Search Anggota)           v ] |
| Pilih Buku    : [ (Dropdown / Search Buku)              v ] |
| Tgl Pinjam    : [ YYYY-MM-DD                              ] |
| Tgl Kembali   : [ YYYY-MM-DD                              ] |
|                                                             |
| [ Simpan Transaksi ]  [ Batal ]                             |
+-------------------------------------------------------------+
```
### D. Form Pengembalian Buku (transaksi/kembali.html)
```text
+-------------------------------------------------------------+
| SIMPUS-Mini  [Dashboard] [Peminjaman] [Pengembalian] [Logout]|
+-------------------------------------------------------------+
| Form Pengembalian Buku                                      |
|                                                             |
| Cari ID Transaksi : [ Masukkan ID / NIM ] [ Cari ]          |
|                                                             |
| Rincian Transaksi:                                          |
| - Nama Anggota : Ahmad Fauzi                                |
| - Judul Buku   : Pemrograman Web                            |
| - Status Denda : Rp 0 (Tepat Waktu)                         |
|                                                             |
| [ Proses Pengembalian ]                                     |
+-------------------------------------------------------------+

### E. Riwayat Transaksi (transaksi/riwayat.html)
+-------------------------------------------------------------+
| SIMPUS-Mini  [Dashboard] [Peminjaman] [Pengembalian] [Logout]|
+-------------------------------------------------------------+
| Riwayat Transaksi Perpustakaan                              |
|                                                             |
| [ Filter Status: Semua v ] [ Cari: ............... ]        |
|                                                             |
| +---------------------------------------------------------+ |
| | No | ID   | Peminjam   | Buku    | Tgl Pinjam | Status  | |
| | 1  | T001 | Ahmad      | Web     | 2026-09-01 | Kembali | |
| | 2  | T002 | Siti       | Basis D | 2026-09-05 | Pinjam  | |
| +---------------------------------------------------------+ |
+-------------------------------------------------------------+