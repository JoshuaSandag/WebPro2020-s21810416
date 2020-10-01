// Rest Parameter and Spread Operator

/* Rest parameter dan spread operator itu bisa kita bilang kembar: mirip tapi tidak sama. 
Sebab keduanya sama-sama menggunakan tanda ... (elipsis atau tiga buah titik) 
sebagai bagian dari syntaxnya, namun fungsinya sangat berbeda.
*/

//rest parameter digunakan dalam fungsi
// contoh menggunakan rest operator
// const hitung = (angka1,angka2,...angka) => // angka dsni sma dg array
// {
//     console.log(angka1);// output 1
//     console.log(angka2);// output 2
//     console.log(angka);// sisa argument 3-5 disimpan di angka

//     let total = 0;
//     angka.forEach((el) => {
//         total = total + el;
//     });
//     return total;
// }
// console.log(hitung(1,2,3,4,5));

// contoh menggunakan spread operator
//1. duplikasi array  
// const angka = [1,2,3,4,5];
// const angka2 = [...angka2];

// angka[0]=10;
// console.log(angka);
// console.log(angka2);

//2.  menggabungkan array 
// const angka = [1,2,3,4,5];
// const angka2 = [6,7,8,9,10];
// const angka3 = [12,13,14,15];

// const gabung5 = angka1.concat(angka2, angka3) // tidak bisa menyisipkan nilai
// console.log(gabung5);

// const gabung6 = angka1.concat(...angka, ...angka2, 11, ...angka3) // menyisipkan angka 11 menggunakan spread operator
// console.log(gabung6);

// 3. Menggabungkan objek 
// let orang1 =
// {
//     nama : "joshua",
//     umur : 20
// };
// let orang2 =
// {
//     jurusan : "SI",
//     tinggi : 160
// };
// const gabungData = {...orang1,...orang2};
// console.log (gabungData);

// 4. Menambah objek 
// let orang1 =
// {
//     nama : "joshua",
//     umur : 20
// }; 

// orang = {...orang1, pedidikan:"Mahasiswa", status :"single"};
// console(orang);





