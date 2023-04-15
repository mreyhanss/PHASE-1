
// gacha(5)

let stringAngka = '26321896232';
let pager = ''
for (let i = 0; i < stringAngka.length; i++) {
    for (let j = 0; j < stringAngka[i]; j++) {
        pager += '#'
    }
    console.log(pager);
    pager = ""
}


// }
// function gacha(angkaa) {
//     for (let i = 1; i <= angkaa; i += 1) {
//         console.log(Math.random(i));
//     }
// }

// let gacha = Math.ceil(Math.random() * 5)
// console.log(gacha);

