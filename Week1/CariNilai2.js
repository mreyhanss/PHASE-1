function Rapor(nama,nilai,absen){
    if(nilai >= 70 && absen < 5){
        console.log("Selamat", nama, "LULUS");
    }else{
        console.log("Maaf", nama, "TIDAK LULUS");
    }
}
Rapor("Badrun",80,7)