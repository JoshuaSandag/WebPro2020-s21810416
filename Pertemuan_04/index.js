// contoh 
let a = 8;
let b = 3;
let LuasA = a * a;
let LuasB = b * b;
let total = LuasA + LuasB;
console.log(total);

/* 
1. fungsi expression
const penjumlahan = function(opsional) (a,b)
{
    let total;
    total = a + b;
    return total;(opsional)
}
const hasil = penjumlahan (8, 3); memanggil fungsi
console.log(hasil)
-lebih mudah dipahami
-lebih flexible karena adanya hoisting dimana fungsi pemanggilnya bisa di tulis dmna saja

2. fungsi declaration
const penjumlahan = (a,b)=parameter
{
    let total;
    total = a + b;
    return total;
}
const hasil = penjumlahan (8, 3);= argumen
console.log(hasil)
-harus di definisikan dahulu baru bisa di panggil
-lebih powerfull

-built function = alert(), prompt()
*/
