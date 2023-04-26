let kata = ''
let kamusx = 0
let kamuso = 0
let hasil = ''

for (let i = 0; i <= kata.length; i++) {
    if (kata[i] === 'x') {
        kamusx += 1
    } else {
        kamuso += 1
    }
}
// console.log(kamuso, kamusx);
if (kamuso > kamusx) {
    console.log('Jumlah O', kamuso, 'lebih banyak dari kamusx', kamusx);
} else if (kamusx > kamuso) {
    console.log('Jumlah X', kamusx, 'lebih banyak dari kamus O', kamuso);
} else {
    console.log('Jumlah O', kamuso, 'jumlahnya sama dengan kamusx', kamusx);
}
