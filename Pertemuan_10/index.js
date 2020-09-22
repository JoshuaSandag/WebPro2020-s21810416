//Var, Let, Const

//kelemahan dari var itu adalah ketika membuat program yang mempunyai nama variabel yg sama.
// var program tersebut tetap sukses atau di jalankan jadi masalahnya ketika program yang kita buat itu
//besar akan sangat membingungkan ketika ada nama variabel yang sama 

//contoh Var 
// var nama = "joshua"
// var nama = "sandag"
// console.log(nama);

//var mempunyai (func scope) dan mempunyai masalah ketika dipakai di program besar
// function tes ()
// {
//     for(var i=0; i<10; i++)
//     {
//         console.log(i);
//     }
// }
// tes()
// console.log(i);
// {
//  let ;
//  for(i=0; i<10; i++)
//  {
//      console.log(i);
//  }
// }
// console.log(i);

//2. Template literal ES 6

const orang = {
    namaAwal : "joshua",
    namaAkhir : "sandag", 
    age : 20
};
console.log ("hallo nama saya" +orang.namaAwal+ "" +orang.namaAkhir+ "umur saya adalah" +orang.age+ "tahun" )//konsep biasa
console.log (`hallo nama saya ${orang.namaAwal} ${orang.namaAkhir} umur saya adalah ${orang.age}tahun`);//konsep template litearal ver ES6
