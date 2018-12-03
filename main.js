
function hide(){
 var a = document.getElementById("h");
 var p = document.getElementById("s");
 a.setAttribute("style", "display:none");
 p.setAttribute("style", "display:none");
 player = 1;
 play();

}
function hide2(){
 var a = document.getElementById("r");
 var p = document.getElementById("s");
 a.setAttribute("style", "display:none");
 p.setAttribute("style", "display:none");
 player = 2;
 play();
}
function hide3(){
 var a = document.getElementById("h");
 var p = document.getElementById("r");
 a.setAttribute("style", "display:none");
 p.setAttribute("style", "display:none");
 player = 3;
 play();
}
function reset() {
    var a = document.getElementById("r");
    var p = document.getElementById("s");
    var h = document.getElementById("h");
    a.setAttribute("style", "display:inline-block");
    p.setAttribute("style", "display:inline-block");
    h.setAttribute("style", "display:inline-block");
    var x1 = document.getElementById("p1");
    var x2 = document.getElementById("p2");
    var x3 = document.getElementById("p3");
    x1.setAttribute("style", "display:inline-block");
    x2.setAttribute("style", "display:inline-block");
    x3.setAttribute("style", "display:inline-block");

}

 function play(){
    var x1 = document.getElementById("p1");
    var x2 = document.getElementById("p2");
    var x3 = document.getElementById("p3");
    var random = parseInt(Math.random()*3)+1;
    computer = random;
    result();
    if (random == 1 ){
        x2.setAttribute("style", "display:none");
        x3.setAttribute("style", "display:none");
    } else if (random == 2) {
        x1.setAttribute("style", "display:none");
        x3.setAttribute("style", "display:none");
    } else {
        x1.setAttribute("style", "display:none");
        x2.setAttribute("style", "display:none");
    }
};
var score = 0;
var player;
var computer;
function result(){
    var name = document.getElementById('nom1').value;
    if(player==computer) {
        document.getElementById('winner').innerHTML='Draw';
        document.getElementById('score').innerHTML=score;
    } else if(player==1 && computer==2 || player==2 && computer==3 || player==3 && computer==1) {
        score++;
        document.getElementById('winner').innerHTML=name+' is winner';
        document.getElementById('score').innerHTML=score;
    } else {
        score--;
        document.getElementById('winner').innerHTML='computer is winner';
        document.getElementById('score').innerHTML=score;
    }
}
    
