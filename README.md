# Tugas Seleksi Calon Kandidat Rizal Sujana

## Perkenalkan Diri Saya
Halo, nama saya **Rizal Sujana**, dan saya sangat senang untuk dapat melanjutkan ke tahap seleksi berikutnya untuk posisi yang saya lamar di **PT Nexin Inovasi Sejahtera**. Saya memiliki latar belakang yang kuat dalam **pengembangan perangkat lunak** dan memiliki keterampilan dalam **React.js**, **JavaScript**, dan **pengembangan aplikasi web**.

Saya berharap dapat memberikan kontribusi yang signifikan dalam proses seleksi ini dan membuktikan keterampilan serta kemampuan saya dalam mengerjakan tugas-tugas yang diberikan.

## Tugas yang Harus Saya Kerjakan

Sebagai bagian dari **Home Assessment**, berikut adalah tugas yang perlu saya kerjakan:

1. **Permainan Minion**: Sebuah aplikasi yang menghitung skor untuk dua pemain, Kevin dan Stuart, berdasarkan substring yang mereka buat dari string input. 
2. **Permainan Matrix**: Membantu memutar kolom dalam matriks untuk mencocokkan string target.
3. **JSON Manipulation**: Mengelola data JSON dan menghasilkan kombinasi tim yang valid berdasarkan input dari grup yang ada.

Saya telah mengimplementasikan aplikasi dengan menggunakan **React.js**. Setiap permainan yang telah saya kerjakan dapat diakses dengan memilih tautan dari menu navigasi aplikasi yang saya buat.

## Pertanyaan yang Diberikan:

Berikut adalah pertanyaan dari **HRD PT Nexin Inovasi Sejahtera** yang perlu saya jawab terkait dengan tugas ini:

> **Dear candidate,**

> Kami menginformasikan bahwa Anda telah lolos ke tahap selanjutnya, yaitu Home Assessment sebagai bagian dari proses seleksi kami.

> Berikut tugas yang perlu Anda kerjakan terlampir pada file di attachment.

> Deadline Pengumpulan: Senin, 14 April 2025 Pukul 08:00 WIB  
> Jika ada pertanyaan terkait tugas ini, silakan hubungi kami.

> Semoga sukses dan kami menantikan hasil kerja Anda!

> Salam hormat,  
> Rinaldi  
> HRD PT Nexin Inovasi Sejahtera

## Langkah-langkah Website menggunakan React.js:

Untuk mengerjakan tugas ini, saya telah membangun **aplikasi web berbasis React.js** dengan langkah-langkah sebagai berikut:

1. **Pembuatan Struktur Proyek**:
   - Menggunakan `create-react-app` untuk memulai proyek React.
   - Menambahkan folder untuk setiap komponen (misalnya, `PermainanMinion`, `PermainanMatrix`, `JsonManipulasi`).
   - Memisahkan logika permainan dan manipulasi JSON dalam komponen-komponen terpisah untuk menjaga struktur yang bersih dan terorganisir.

2. **Navigasi dengan React Router**:
   - Menggunakan **React Router** untuk menavigasi antara halaman permainan yang berbeda (Minion, Matrix, JSON Manipulation).
   - Setiap halaman permainan dapat diakses dengan klik tautan di menu navigasi yang ada di aplikasi.

3. **Integrasi Toast Notifications**:
   - Menggunakan **`react-toastify`** untuk menampilkan pesan notifikasi toast ketika ada error, hasil permainan, atau jika input tidak valid.
   - Menambahkan notifikasi untuk memberi umpan balik langsung kepada pengguna.

4. **Menggunakan React State dan Hooks**:
   - Mengelola state menggunakan **`useState`** untuk menyimpan input, output, dan hasil perhitungan permainan.
   - **`useEffect`** digunakan untuk memodifikasi atau memperbarui judul halaman web (menggunakan `react-helmet`).

5. **Penerapan Validasi dan Error Handling**:
   - Memvalidasi JSON yang dimasukkan oleh pengguna dan memberikan umpan balik dengan toast notification jika input JSON tidak valid.
   - Menggunakan **`try-catch`** untuk menangani kesalahan pada proses perhitungan tim atau permainan.

6. **Tampilan Interaktif dengan JSON**:
   - Menggunakan **`ReactJson`** untuk menampilkan output JSON yang terstruktur dan interaktif, yang memungkinkan pengguna untuk menjelajahi hasilnya dengan mudah.

7. **Styling dan Responsivitas**:
   - Styling menggunakan CSS untuk memberikan tampilan yang bersih, rapi, dan responsif.
   - Penggunaan **`pre`** untuk menampilkan hasil output JSON dengan format yang mudah dibaca.

## Cara Menjalankan Aplikasi:

1. Clone repository ini ke komputer Anda.
2. Pastikan Anda telah menginstal **Node.js** dan **npm** di sistem Anda.
3. Jalankan perintah berikut untuk menginstal dependensi:
   ```bash
   npm install
4. Jalankan perintah berikut untuk menginstal dependensi:
   ```bash
   npm start
4. Aplikasi akan berjalan di browser pada http://localhost:3000.
