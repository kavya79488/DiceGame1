var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
function replacingImage(){
    if(randomNumber1===1){
        var change = document.querySelectorAll(".image6")[0].setAttribute("src","./images/dice1.png");
    }
    else if(randomNumber1===2){
        var change = document.querySelectorAll(".image6")[0].setAttribute("src","./images/dice2.png");
    }
    else if(randomNumber1===3){
        var change = document.querySelectorAll(".image6")[0].setAttribute("src","./images/dice3.png");
    }
    else if(randomNumber1===4){
        var change = document.querySelectorAll(".image6")[0].setAttribute("src","./images/dice4.png");
    }
    else if(randomNumber1===5){
        var change = document.querySelectorAll(".image6")[0].setAttribute("src","./images/dice5.png");
    }
    else if(randomNumber1===6){
        var change = document.querySelectorAll(".image6")[0].setAttribute("src","./images/dice6.png");
    }
    if(randomNumber2===1){
        var change = document.querySelectorAll(".image6")[1].setAttribute("src","./images/dice1.png");
    }
    else if(randomNumber2===2){
        var change = document.querySelectorAll(".image6")[1].setAttribute("src","./images/dice2.png");
    }
    else if(randomNumber2===3){
        var change = document.querySelectorAll(".image6")[1].setAttribute("src","./images/dice3.png");
    }
    else if(randomNumber2===4){
        var change = document.querySelectorAll(".image6")[1].setAttribute("src","./images/dice4.png");
    }
    else if(randomNumber2===5){
        var change = document.querySelectorAll(".image6")[1].setAttribute("src","./images/dice5.png");
    }
    else if(randomNumber2===6){
        var change = document.querySelectorAll(".image6")[1].setAttribute("src","./images/dice6.png");
    }

}
function winner(){
    if(randomNumber1>randomNumber2){
        document.querySelectorAll(".heading")[0].textContent="player 1 Won!";
    }
    else if(randomNumber2>randomNumber1){
        document.querySelectorAll(".heading")[0].textContent="player 2 Won!";
    }
    else{
        document.querySelectorAll(".heading")[0].textContent="DRAW";
    }
}
function replaceNames(){
    var player1 = document.getElementById("input1").value;
    var player2 = document.getElementById("input2").value;
    document.getElementById("player1").innerHTML=player1;
    document.getElementById("player2").innerHTML=player2;
    
}
replacingImage()
winner()