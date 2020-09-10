// Pada pertemuan ke 7 kita akan membahas tentang JavaScript loop dan Conditional ---

/*
1. Apa itu Loop ?
Loop dalam Bahasa Indonesia artinya putaran.
Dalam JavaScript, maksudnya adalah perulangan. 
Jadi, loop adalah sekumpulan kode yang akan dijalankan berulang kali sampai batas yang ditentukan.
Ada 5 jenis loop di JavaScript, yaitu:
-for
-for...in
-for...of
-while
-do...while

2. Apa itu Conditional ?
Kalau diterjemahkan ke dalam bahasa Indonesia,
conditional artinya adalah persyaratan.
jadi conditional dalam JavaScript adalah,
menyatakan sebuah kondisi dan menyatakan keputusan (program) yang akan dijalankan.
Di JavaScript ada dua cara menulis perintah conditional, yaitu:
-Menggunakan if, else if dan else.
-Menggunakan switch dan case.
*/

// Contoh For Loop
for (let i = 1; i<=10; i++)
{
    console.log(i);
}

//contoh  For/In Loop dan For/Of Loop
  const buku = 
  {
    judul_buku: "Harry Potter and The Philosopher's Stone",
    pengarang: "J. K. Rowling",
    tahun: 1997
  };
  let daftarPeminjam =
  [
      "--Daftar Peminjam Buku--",
      "Joshua Sandag",
      "Putu Gede",
      "Edson Soumay"
  ];
 for (x in buku) 
 {
   console.log(x, ':', buku[x]);
 }
 for (y of daftarPeminjam)
 { 
    console.log(y);
 }
 
//contoh While dan Do While Loop
let i = 5;
let sisa = "Menampilkan sisa angka yang memenuhi kondisi";

do 
{
  console.log(i);
  i++;
} 
while (i <= 12)
{
    console.log(sisa);
};

// contoh if, else if dan else
let PilihanUser = 3;

if (PilihanUser > 5 && PilihanUser < 10) 
{
  console.log("segala jenis Pisang Goreng");
} 
else if (PilihanUser => 3 && PilihanUser <=4) 
{
  console.log("segala jenis Pizza");
}
else if (PilihanUser => 1 && PilihanUser <=2)
{
  console.log("segala jenis Tinutuan");
}
else
{
 console.log("Belum Terdaftar");
}

// contoh Switch dan Case
let fakultas;
let pilihanUser = 2;

switch (pilihanUser) {
  case 1:
    fakultas = "Fakultas Ekonomi";
    break;
  case 2:
    fakultas = "Fakultas Komputer";
    break;
  case 3:
    fakultas = "Fakultas Keperawatan";
    break;
  case 4:
    fakultas = "Fakultas Filsafat";
    break;
  default:
    fakultas = "Lain-Lain";
}
console.log(fakultas);






