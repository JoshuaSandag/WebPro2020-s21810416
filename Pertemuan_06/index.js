/* Pada pertemuan ke 6 kita akan membahas tentang objek ---
   objek adalah kumpulan nilai yang memiliki nama 
*/

//objek 
//menggunakan literale
//key itu dpe namaDepan sedangkan value itu dpe nama
const mhs1 = { //memakai kurung kurawal
    namaDepan:'Josh',
    namaBelakang:'Sand',
    umur: 20,
    belumLulus: true,
    alamat: {
         jalan: "pomorow 8",//objek dlm objek
         kecamatan: "tikala",
    },
    IPSemester: [3.05, 3.25, 3.22],//array dlm objek
    hitungIPK : function()
    {
        let total = 0;
        this.IPSemester.forEach(function(el)//fungsi dlm objek
        { 
            total = total + el;

        });
        this.IPKumlatif = total / 3;
    },
}

//1.dot notation
console.log(mhs1.umur);
//2.bracket notation
console.log(mhs1["namaDepan"]);
//memanggil dalam objek
console.log(mhs1.alamat.jalan);
//memanggil array dlm objek
console.log(mhs1.IPSemester[2]);
// Mengakses properti objek dlm function
console.log(mhs1.hitungIPK);
//menampilkan semua
console.log(mhs1)

// //objek 2
// //menngunakan new
// const mhs2 = new objek();
// mhs2.namaDepan = "josh";
// mhs2.namaBelakang = "sand";