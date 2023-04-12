function waktu(angka) {
    let menit = Math.floor(angka / 60);
    let detik = angka % 60;
    if (menit < 10) {
        menit = "0" + menit
    }
    let hasil = menit + ":" + detik;
    console.log(hasil);
}
waktu(1580)