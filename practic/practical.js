var carone = document.getElementById("car1");
var cartwo = document.getElementById("car2");
var carthree = document.getElementById("car3");
var carfour = document.getElementById("car4");

var bitdi = document.getElementById("finish").offsetLeft-120;
var rdn1 = 0;

function Startt() {
    yarisma = setInterval(raccing, 150);

}

var result = false;

var raccing = function () {
    car1();
    car2();
    car3();
    car4();
}

var randomNumberCreator = function () {
    var rdn;
    do {
        rdn = Math.floor(Math.random() * 100);

    } while (rdn < 8);
    return rdn;
}

function car1() {
    if (rdn1 < bitdi) {
        rdn1 += randomNumberCreator();

        if (rdn1 >= bitdi) {
            rdn1 = bitdi;
            clearInterval(yarisma);
            if(!result){
                result=true;
               setTimeout(function(){ document.getElementById("rslt").innerHTML="CAR ONE WINNER!";},4000)
            }
            carone.style.marginLeft = bitdi + "px";
        } else {
            carone.style.marginLeft = rdn1 + "px";
        }
    }
}

function car2() {
    if (rdn1 < bitdi) {
        rdn1 += randomNumberCreator();

        if (rdn1 >= bitdi) {
            rdn1 = bitdi;
            clearInterval(yarisma);
            if(!result){
                result=true;
               setTimeout(function(){ document.getElementById("rslt").innerHTML="CAR TWO WINNER!";},4000)
            }
            cartwo.style.marginLeft = bitdi + "px";
        } else {
            cartwo.style.marginLeft = rdn1 + "px";
        }
    }
}

function car3() {
    if (rdn1 < bitdi) {
        rdn1 += randomNumberCreator();

        if (rdn1 >= bitdi) {
            rdn1 = bitdi;
            clearInterval(yarisma);
            if(!result){
                result=true;
               setTimeout(function(){ document.getElementById("rslt").innerHTML="CAR THREE WINNER!";},4000)
            }
            carthree.style.marginLeft = bitdi + "px";
        } else {
            carthree.style.marginLeft = rdn1 + "px";
        }
    }
}

function car4() {
    if (rdn1 < bitdi) {
        rdn1 += randomNumberCreator();

        if (rdn1 >= bitdi) {
            rdn1 = bitdi;
            clearInterval(yarisma);
            
            if(!result){
                result=true;
               setTimeout(function(){ document.getElementById("rslt").innerHTML="CAR FOUR WINNER!";},4000)
            }
            carfour.style.marginLeft = bitdi + "px";
        } else {
            carfour.style.marginLeft = rdn1 + "px";
        }
    }
}
