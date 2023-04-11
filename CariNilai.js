function Rapot(nama,nilai){
    if(nilai >= 0 && nilai <= 34 ){
        console.log("Skor E");
    }
    if(nilai >= 35 && nilai <= 49){
        console.log("Skor D");
    }
    if(nilai >= 50 && nilai <= 64){
        console.log("Skor C");
    }
    if(nilai >= 65 && nilai <= 79){
        console.log("Skor B");
    }
    if(nilai >= 80 && nilai <= 100){
        console.log("Skor A");
    }
}

Rapot("Madun",61)