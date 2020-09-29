// Arrow Function
/*
Di Javascript ES6, ada cara baru dalam penulisan sebuah fungsi, yaitu menggunakan arrow function.
Kelebihan menggunakan arrow function adalah penulisan fungsi menjadi lebih singkat dan lebih mudah dibaca.
*/
// 1. fungsi dengan parameter
/*const operasiPenjumlahan = (bilangan1, bilangan2) =>
  {
    const hasil =  bilangan1 + bilangan2;
    return hasil;
  };
  const operasiPengurangan = (bilangan1, bilangan2) =>
  {
    const hasil =  bilangan1 - bilangan2;
    return hasil;
  };
  console.log(operasiPenjumlahan(3, 4)); // Output: 7
  console.log(operasiPengurangan(10,5)); // output: 5

// 2. fungsi yang tidak memiliki parameter
const namaJenisAnjing = () => 
  {
    const anjing = ["Pug", "Bulldog", "Poodle"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
  }
const jenisAnjing2 = () => 
  {
    const anjing = ["Pomerian", "Retriver", "Siberian"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
  }
  console.log(namaJenisAnjing()); // Output:  (hasil random)
  console.log(jenisAnjing2()); // Output:  (hasil random)
*/

  // Pertemuan 12 
// Lab exercise
// convert to ES 6 
let yearUntilRetirement = (year=2020, firstName="joshua")=>
{
    const age = 30;
    const retirement = 65 - age;
    if(retirement>0)
    {
        console.log(firstName + "retired in" +retirement+ "years");
    }
    else
    {
        console.log(firstName+ " is already retired ");
    }
}
yearUntilRetirement ();
