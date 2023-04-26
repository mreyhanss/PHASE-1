let kata = 'kasur rusak'
let kataDibalik = ''

for (let i = kata.length - 1; i >= 0; i--) {
    kataDibalik += kata[i]
}
if (kata === kataDibalik) {
    console.log("Kalimat ini merupakan Palindrom");
} else {
    console.log("Kalimat ini bukan merupakan Palindrom");
}
