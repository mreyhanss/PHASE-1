let A = 5

function getminimumcost(angka){
    if(angka < A){
        console.log(angka);
    }
    else if(angka > A){
        console.log(A);
    }
    else if(angka === A){
        console.log("Seri");
    }
}

getminimumcost(2)
getminimumcost(5)
getminimumcost(7)
getminimumcost(10)

function isKelipatan (angka , kelipatan){
    if(kelipatan === 0 || angka === 0){
        console.log("Gabisa 0");
    }else{
        if(angka % kelipatan === 0){
            console.log("True");
        }
        else{
            console.log("False");
        }
    }
    
}

isKelipatan(0 , 3)
isKelipatan(3 , 0)
isKelipatan(3 , 3)
isKelipatan(12 , 3)