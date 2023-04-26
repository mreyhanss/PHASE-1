// let kata = 'Hujan'
// let kamusKatadibalik = ''

// for (let i = kata.length - 1; i >= 0; i--) {
//     kamusKatadibalik += kata[i]
// }
// console.log(kamusKatadibalik);

let jumlahBintang = 5
let bintangnya = ''

for (let i = 1; i <= jumlahBintang; i++) {
    for (let j = 1; j <= jumlahBintang; j++) {
        bintangnya += '*'
    }
    console.log(bintangnya);
    bintangnya = ''
}



