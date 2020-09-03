/* Pada pertemuan ke 5 kita akan membahas tentang array ---
 array merupakan Array adalah tipe variabel yang dapat menampung
 berbagai jenis data dengan tipe yang bermacam-macam,dengan jumlah
 yang tidak terbatas. Array di JavaScript memiliki ciri khas yaitu data
 yang ditampung dibungkus dengan sepasang kurung siku [ ].
 Jadi Array adalah variabel yang bisa menampung lebih dari satu nilai.
*/

//contoh

/*deklarasi array
 let angka = ["1", "2", "3", "4", "5"];
 console.log(angka);
 let namaBuah = ["apel", "jeruk", "apel"];
 console.log(namaBuah);
*/ 

/* array bervariasi
let arr = ["text",1,true];
console.log(arr);
*/


/* fungsi dalam array
 let myFunc = function () {
     return "hello array";
   };
   // array di dalam array dan variasi element pada array
   let arr2 = ["text",1,true,myFunc(),[1,2,3,4,5]]; 
   //mengakses element dalam array
   console.log(arr2[2]); = output : true
   console.log(arr2[3]); = output : hello array
   console.log(arr2[4][2]); = output : 3
*/

/*menambah isi array
let mhs = [];
mhs[0] = "josh";
mhs[1] = "john";
console.log(mhs);
*/
/*mengubah isi array
mhs[0] = "joshua";
console.log(mhs);
*/
/* menghapus isi array
mhs [1] = undefined;
console.log(mhs);
*/
/*menampilkan isi array menggunakan pengulanggan
let namaBuah = ["apel", "jeruk", "manggis"];
for(let i=0; i < namaBuah.length; i++)
{
    console.log("Buah ke- " + (i+1) + "adalah" + namaBuah);
}
*/

/* Method yang ada di dalam Array
 1. length = untuk mengetahui jumlah element pada array
 2. toString = semua penghubung pada array menjadi tanda koma
 contoh : 
 let mhs = ["john", "josh", "jen", "jeni"]; 
 console.log(mhs.toString());
 output : john,josh,jen,jeni
 3. join = hampir sama dengan toString tapi kita dapat mengganti tanda penghubung
 console.log(mhs.join("-"));
 4. push(menambah di akhir),pop(mengeluarkan di akhir)
 unshift(menambah di awal),shift(mengeluarkan di awal)
 mhs.push("cehva"); output : john josh jen jeni cehva
 mhs.pop("cehva"); output : john josh jen jeni 
 unshift dan shift sama seperti push dan pop cma bedanya
 kalau push dan pop menambahkan elemen di akhir kalau
 shift dan unshit di awal.
 5.concat menggabungkan 2 aray atau lebih
 let buah = ["pisang", "apel", "jeruk"];
 let sayur = ["tomat", "bayam", "wortel"];
 let biji = ["kedelai", "kacang tanah", "kacang polong"];
 let makanan = buah.concat(sayur, biji);
 console.log(makanan); 
 Output: pisang apel jeruk tomat bayam wortel kedelai kacang tanah kacang polong
 6.
 -slice(digunakan untuk mengambil beberapa element pada array, dan menaruhnya pada array baru)
 let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
 let cemilanGurih = cemilan.slice(0, 3);
 let cemilanManis = cemilan.slice(3);
 console.log(cemilanGurih); // Output: ["kripik singkong", "kripik kentang", "krupuk ikan"]
 console.log(cemilanManis); // Output: ["permen", "coklat", "kue"]
 -splice
 let buah = ["Semangka","Mellon","Apel","Jeruk"]
 buah.splice(2, 0, "Mellon", "Jeruk");
 console.log(buah);
 7. foreach, map
 let angka1 = [1, 2, 3, 4,.slice(3), 61 8];
 let tampilAngka = function (el){
     return el;
 };
 8. sort
 let angka4 = [1,40,6,811,2,7]
 angka4.sort(function (a, b){
     return a - b;
 });
 console.log(angka4);
9. filter
let lebihBesar = angka4.filter(function (el){
     return el > 2;
});
console.log(lebihBesar);
*/


