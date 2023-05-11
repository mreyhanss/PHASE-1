// let anggota = ['Reyhan', 'AlipJon']

// function antrian(line, name) {
//     line.unshift(name)
//     return line;
// }
// console.log(antrian(anggota, 'Agung'));

// function ganjilGenap(platNomor) {

//     let platGanjil = 0
//     let platGenap = 0

//     for (let i = 0; i < platNomor.length; i++) {
//         if (platNomor[i] % 2 === 0) {
//             platGenap += 1;
//         } else {
//             platGanjil += 1;
//         }
//     }
//     console.log('plat genap sebanyak', platGenap, 'dan plat ganjil sebanyak', platGanjil);
// }

// ganjilGenap([2341, 3429, 864, 1309, 1276])//plat genap sebanyak 2 dan plat ganjil sebanyak 3
// console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
// console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
// console.log(ganjilGenap('')) //plat tidak ditemukan
// console.log(ganjilGenap()) //invalid data


let board = ['i', '', '', 10, '', '', -5, -10, '', 100, 'a', 'A', 'o', 'b']
let vocalan = ['a', 'i', 'u', 'e', 'o']
let jumlahan = 0
let tampunghuruf = ''

function vocalSeeker(draob) {
    for (let i = 0; i < draob.length; i++) {
        for (let j = 0; j < vocalan.length; j++) {
            if (String(draob[i]).toLowerCase() === vocalan[j]) {
                jumlahan += 1
                tampunghuruf += draob[i]
            }
        }
    }
    return `vokal ditemukan ${jumlahan} dan kumpulan vokal adalah ${tampunghuruf}`
}

console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo