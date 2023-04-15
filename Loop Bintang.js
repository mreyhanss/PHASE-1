let angka = 1
let bintang = ''

for (let i = 5; i >= angka; i--) {
    for (let j = 1; j <= i; j++) {
        bintang += "*"
    }
    console.log(i, bintang);
    bintang = ''
}
