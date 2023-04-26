// let age = 10
// let canSwim = true
// let haveLisence = true

// if (age < 10) {
//     console.log('Mohon maaf kamu belum cukup umur');
// }
// else {
//     if (age > 15) {
//         if (haveLisence) {
//             console.log('Kamu bisa diving ya');
//         } else {
//             console.log('Bisa diving tapi ditemani buddy');
//         }
//     } else {
//         if (canSwim) {
//             console.log('Bisa snorkling');
//         } else {
//             console.log('Maaf kamu tidak bisa berenang');
//         }
//     }

// }

// let nameUSer = "Basil"
// let id = 'S0opASSrvc'
// let penampungR = 0
// let penampungS = 0

// for (let i = 0; i < id.length; i++) {
//     if (id[i] === "R") {
//         penampungR++
//     }
//     if (id[i] === "S") {
//         penampungS++
//     }

// }
// if (penampungR > 0) {
//     if (penampungR >= 5) {
//         console.log(nameUSer, "sudah menjadi anggota biasa selama", penampungR, "tahun dan dapat medali gold");
//     } else {
//         console.log(nameUSer, "sudah menjadi anggota biasa selama", penampungR, "tahun");
//     }
// }

// if (penampungS > 0) {
//     if (penampungS >= 5) {
//         console.log(nameUSer, "sudah menjadi pengurus sekte selama", penampungS, "tahun dan dapat medali gold");
//     } else {
//         console.log(nameUSer, "sudah menjadi pengurus sekte selama", penampungS, "tahun");
//     }
// }


// ketika menemukan huruh YOMAN, mendapat 20 poin;
// kalo menemukan karakter !@#$%^&*, mendapat 1 poin;
// huruf selain YOMAN, 0 point
// harga permen karet 1000 rupiah

let randomTickets = 'YO!#QWEMAN&&ZB'
let money = 0
let kamusYoman = "YOMAN"
let kamusKarakter = '!@#$%^&*'
let totalPoint = 0
let hadiah = ''

for (let i = 0; i < randomTickets.length; i++) {
    money += 1000
    for (let j = 0; j < kamusYoman.length; j++) {
        if (randomTickets[i] === kamusYoman[j]) {
            totalPoint += 20
        }
    }
    for (let k = 0; k < kamusKarakter.length; k++) {
        if (randomTickets[i] === kamusKarakter[k]) {
            totalPoint += 1
        }
    }
}
if (totalPoint > 100) {
    hadiah = 'Hadiah Utama'
} else if (totalPoint >= 50 && totalPoint <= 100) {
    hadiah = 'pleystetion5'
} else {
    hadiah = 'permen karet'
}

console.log('Kamu menghabiskan uang sejumlah', money, 'dan kamu mendapat', hadiah);