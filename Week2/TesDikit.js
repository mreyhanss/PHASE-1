function genap(angka) {
    for (let i = 1; i <= angka; i++) {
        if (i % 2 === 0) {
            console.log(i, 'genap');
        }
    }
}

function ganjil(angka) {
    for (let i = 0; i <= angka; i++) {
        if (i % 2 != 0) {
            console.log(i, 'ganjil');
        }
    }
}

function keltig(angka) {
    for (let i = 0; i <= angka; i++) {
        if (i % 3 === 0) {
            console.log(i, 'keltig');
        }
    }
}

function ALL(jenis, batasAngka) {
    if (jenis === 'genap') {
        genap(batasAngka)
    }
    else if (jenis === 'ganjil') {
        ganjil(batasAngka)
    }
    else if (jenis === 'keltig') {
        keltig(batasAngka)
    }
}

ALL('genap', 25)