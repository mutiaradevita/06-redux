|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720135 |
| Nama |  Mutiara Devita Eka Putri |
| Kelas | TI - 3A |

Soal Praktikum 2
1. Coba akses http://localhost:3000/login, dan klik tombol login. Kemudian lakukan refresh page berkali-kali (jika perlu restart npm run dev nya). Simpulkan apa yang terjadi ?

    Jawab :
    
    Ketika dilakukan refresh page berkali-kali pada saat status berhasil, maka akan muncul pesan "Yay, berhasil login!!!" dan pada saat logout maka akan muncul pesan "Anda telah logout!". Hal ini terjadi karena kita menggunakan Redux untuk menyimpan data login dan logout sehingga data tersebut tidak akan hilang ketika kita melakukan refresh page maupun melakukan restart npm run dev.

2. Baris 25 dan 30 terdapat method parse(), apa yang terjadi jika kita tidak menggunakan method tersebut?

    Jawab :


    Jika tidak menggunakan method parse() pada baris 25 dan 30, maka teks HTML yang didefinisikan dalam variabel successAlert dan failedAlert akan ditampilkan sebagai string literal, bukan sebagai HTML yang diinterpretasikan.

Tugas (Pertanyaan Praktikum)
1. Apa kegunaan dari kode ini import { useEffect } from "react"; Pada file pages/_app.tsx? jelaskan

    Jawab :

    Kode tersebut digunakan untuk menjalankan kode setelah component pertama kali dirender, menambahkan event listener, melakukan request data dari API, dan membersihkan event listener atau sumber daya lain saat component di-unmount.

2. Jika pada file pages/_app.tsx kita tidak menggunakan useEffect (menghapus baris 3, dan baris 9-11), apa yang akan terjadi?

    Jawab : 

    Menghapus useEffect pada file tersebut tidak akan menyebabkan error. Namum, fungsionalitas untuk menyimpan posisi scrollbar akan hilang.

3. Mengapa di react/nextjs penulisan tag html untuk class, harus diganti menjadi className ?

    Jawab : 

    Karena react menggunakan camelCase untuk penamaan properti JavaScript. Sehingga penggunaan className lebih konsisten dengan gaya penamaan react. Penggunaan className ini juga menghindari konflik penamaan dan meningkatkan kompatibilitas, penggunaan className memungkinkan React untuk mentranspile nama class dengan benar dan memastikan kompatibilitas dengan browser yang lebih lama. Dan juga penggunaan className memungkinkan React untuk mengintegrasikan dengan CSS Modules dengan mudah.


4. Apakah store pada nextjs bisa menyimpan banyak redux reducer?

    Jawab : 

    Bisa, Store pada Next.js dapat menyimpan banyak Redux reducer.

5. Jelaskan kegunaan dari file store.js!

    Jawab :
    File store.js digunakan untuk menyimpan dan mengelola data pada aplikasi web. Fungsinya tergantung pada framework atau library yang digunakan, tetapi pada umumnya file ini memiliki kegunaan untuk menyimpan data, mengakses data, memperbarui data, dan mengelola state aplikasi.

6. Pada file pages/login.tsx, apa maksud dari kode ini ?
const { isLogin } = useSelector((state) => state.auth);

    Jawab :
    
    Kode tersebut mengambil nilai isLogin dari state auth di Redux store dan menyimpannya dalam variabel isLogin. Variabel isLogin kemudian digunakan dalam component pages/login.tsx untuk menentukan apakah pengguna sudah login atau belum.

7. Pada file pages/counter.tsx, apa maksud dari kode ini?
const {totalCounter} = useSelector((state) => state.counter);

    Jawab :

    Kode tersebut mengambil nilai totalCounter dari state counter di Redux store dan menyimpannya dalam variabel totalCounter. Variabel totalCounter kemudian dapat digunakan dalam component pages/counter.tsx untuk menampilkan nilai counter.