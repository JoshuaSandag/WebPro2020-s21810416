//Destructuring
//Memecah item atau properti pada array atau objek ke dalam variabel berbeda

//1. Array
//A. cara lama
// const colors =["merah", "kuning", "biru"];
// let satu = warna[0];
// let dua = warna[2];
// let tiga = warna[3];

//B. Menggunakan Destructuring
// const colors =["merah", "kuning", "biru"];
// let[satu, dua, tiga] = "warna";

//2. Objek
//A.Cara lama 
// const user = {
//     nama : "joshua",
//     kelamin : "laki-laki",
//     umur : 20
// };
// let name : user.nama;
// let kelamin : user.kelamin;
// let umur : user.umur;

//B.Cara destructuring
// const user = {
//     nama : "joshua",
//     kelamin : "laki-laki",
//     umur : 20
// };
// let {nama, gender, umur} = user;

//contoh case
// const display =(nama,umur) =>{
//     console.log (`Nama saya adalah ${nama}. Umur saya ${umur}`);
// }
// display(user);

//3. Array objek
// const users = [
//     {id: 1, nama: "joshua"},
//     {id: 2, nama: "cehva"},
//     {id: 3, nama: "marlev"},
// ];
//A. Cara Lama
// let [user1, user2, user3] = users;
// console.log(user1,user2,user3);

//B. Cara Destructuring
// let [
//     {id: idUser1, nama: idUser1},
//     {id: idUser2, nama: idUser2},
//     {id: idUser3, nama: idUser3},
// ] = users;
// console.log(idUser1, namaUser1)

// 4. kombinasi dengan rest operator
// const colors = ["merah", "biru", "kuning"];
// let [satu, ...lainnya] = warna;
// console.log (satu);
// console.timeLog(lainnya);
