let nama = 'Re2yha4n'
let kamusangka = '0123456789'
let newName = ''

for (let i = 0; i < nama.length; i++) {
    for (let j = 0; j < kamusangka.length; j++) {
        if (nama[i] === kamusangka[j]) {
            for (let k = 0; k < nama[i]; k++) {
                newName += nama[i - 1]
            }
        }
    }
    if (!Number(nama[i])) {
        newName += nama[i]
    }

}
console.log(newName);