let kata = 'Muhammad Reyhan Kusnandar'
let jumlahSpasi = 0

for (let i = 0; i <= kata.length - 1; i++) {
    if (kata[i] === ' ') {
        jumlahSpasi += 1
    }
}
let jumlahKata = jumlahSpasi + 1
console.log(jumlahKata);