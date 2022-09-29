# Katalog Restaurant App

#### _Front-end Expert Dicoding_
#### _Submission ke 2_
Ini adalah aplikasi yang dibangun dengan memanfaatkan API katalog restauran dari dicoding.com App ini merupakan app submission ke 2 supaya dapat lulus dari kelas Front-end Expert Dicoding

[![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express) 

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)

## Teknologi
 - Javascript
 - Webpack
 - Menerapkan prinsip PWA
 - ESLint
 - Clean Code
 
## Kriteria App
App ini dibangun haruslah memenuhi beberapa kriteria ini agar supaya dapat memenuhi persyaratan lulus:
1. Halaman Utama (Daftar Restoran)
    Syarat:
    Menampilkan daftar restoran yang datanya bersumber dari API https://restaurant-api.dicoding.dev/. Silakan lihat dokumentasinya pada halaman tersebut.
    Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
    Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.
    Hero elemen tetap dipertahankan.
2. Halaman Detail Restoran
    Syarat:
    Menampilkan detail dari restoran yang dipilih dari halaman utama (daftar restoran) atau halaman favorit restoran.
    Pada halaman detail restoran harus terdapat:
    - Nama restoran
    - Gambar
    - Alamat
    - Kota 
    - Deskripsi
    - Menu Makanan
    - Menu Minuman
    - Customer Reviews
    Terdapat tombol favorite untuk memasukkan atau menghapus restoran favorit dari database (gunakan IndexedDB).
3. Halaman Daftar Restoran Favorit
    Syarat:
    Halaman Daftar Restoran dapat diakses melalui menu navigasi favorit.
    Menampilkan restoran yang difavoritkan oleh pengguna (data diambil dari indexedDB).
    Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
    Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.
4. Native Capability
    Syarat:
    Aplikasi dapat diakses dalam keadaan offline tanpa ada aset yang gagal dimuat, termasuk data yang didapatkan dari API. Anda bebas menggunakan strategi caching apapun, bahkan menggunakan workbox.
    Aplikasi harus menampilkan icon Add to Home Screen.
    Aplikasi memiliki custom icon yang ditampilkan pada home screen dan splash screen.
5. Code Quality
    Syarat:
    Menggunakan ESLint sebagai linter ketika menuliskan kode JavaScript. Harap lampirkan berkas konfigurasi ESLint ya.
    Menerapkan salah satu style guide baik itu Google JavaScript Code Style, AirBnB JavaScript Code Style, atau StandardJS Code Style.
    Periksa kembali sebelum mengirimkan submission, apakah project yang Anda kirimkan sesuai dengan kriteria yang ditetapkan atau tidak, ditandai dengan tidak adanya satupun error ketika menjalankan eslint.
    Pertahankan syarat yang ada pada submission sebelumnya. Seperti responsibilitas tampilan, aksesibilitas pada website, appbar, footer dan sebagainya.

## Features Katalog Restaurant App
- Dapat menyimpan restaurant yang dipilih
- Data App tidak akan hilang ketika halaman web dimuat ulang / reload
- Menampilkan detail dari restaurant sesuai API

## How To Use
```bash
# Clone this repository
$ git clone https://github.com/saul-paulus/Catalog-Restaurant-V2.git

# Go into the repository
$ cd Catalog-Restaurant-V2

# Install dependencies
$ npm install

# Run the app
$ npm start
```
> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## License

MIT

