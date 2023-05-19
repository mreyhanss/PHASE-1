// function loop(angka) {
//     for (let i = 1; i <= 5; i++) {
//         console.log('*');
//     }
// }

// loop(5)

function hitung(angka1, angka2, perhitungan) {
    if (perhitungan === '+') {
        console.log(angka1 + angka2);
    }
    else if (perhitungan === '*') {
        console.log(angka1 * angka2);
    }
    else if (perhitungan === '/') {
        console.log(angka1 / angka2);
    }
    else if (perhitungan === '-') {
        console.log(angka1 - angka2);
    }
}

hitung(6, 2, '/')