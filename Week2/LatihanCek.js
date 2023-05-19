// Terdapat permainan ayo joget , dimana user memasukan input berupa arah sesuai dengan exercise yang ada,
// untuk setiap arah pada userInput yang sesuai dengan exercise, maka score akan bertambah 10. Program juga akan menampilkan
//  kategori berdasarkan persentase:
// 100 % - Perfect
// 80 % - 99% - Great
// 60 % - 79 % - Good
// 0 - 59 % - Bad
// notes: Persentase didapat dari poin dibagi total poin yang bisa didapat dikali 100, pembulatan kebawah 

// EXAMPLE:
// var exercise = '<>^v>>>'
// var userInput = '<>^^>><'

// terdapat 2 output yang tidak sesuai, dan 5 output yang sesuai
// maka program akan menampilkan:

// Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good

let exercise = '<>^v>>>'
let userInput = '>>^v>><'
let poin = 0

for (let i = 0; i < exercise.length; i++) {
    if (exercise[i] === userInput[i]) {
        poin += 10
    }
}

let hasil = Math.floor((poin / (exercise.length * 10)) * 100)

if (hasil >= 100) {
    console.log('Perfect');
}
else if (hasil >= 80) {
    console.log('Great');
}
else if (hasil >= 60) {
    console.log('Good');
}
else {
    console.log('Bad');
}

console.log(hasil);