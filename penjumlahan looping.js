// let stringAngka = '26321896232';
// let hasil = 0

// for (let i = 0; i < stringAngka.length; i++) {
//     hasil += Number(stringAngka[i])
// }
// console.log(hasil);

let stringAngka2 = '263';
let pager = ''

for (let i = 0; i < stringAngka2.length; i++) {
    for (let j = 0; j < stringAngka2[i]; j++) {
        pager += "#"
    }
    console.log(pager);
    pager = ''
}
