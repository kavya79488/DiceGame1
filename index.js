var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
function replacingImage(){
    if(randomNumber1===1){
        var change = document.querySelectorAll(".image6")[0].setAttribute("src","https://t3.ftcdn.net/jpg/01/97/16/30/360_F_197163001_H2gm3LqIrVTm7Fne6kclwRDfMcfm57BC.jpg");
    }
    else if(randomNumber1===2){
        var change = document.querySelectorAll(".image6")[0].setAttribute("src","https://clipartix.com/wp-content/uploads/2016/09/2-dice-clipart-free-clipart-images-image.png");
    }
    else if(randomNumber1===3){
        var change = document.querySelectorAll(".image6")[0].setAttribute("src","https://t3.ftcdn.net/jpg/02/36/03/64/360_F_236036401_3s3HBOxeE5a51a08fOx4UXK6LH8RaZyT.jpg");
    }
    else if(randomNumber1===4){
        var change = document.querySelectorAll(".image6")[0].setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVanX8y3_bmVZTeW4rGqLJ_RkB1hpOVRjFpg&usqp=CAU");
    }
    else if(randomNumber1===5){
        var change = document.querySelectorAll(".image6")[0].setAttribute("src","https://www.pngkey.com/png/detail/91-917449_dots-clipart-five-five-side-of-dice.png");
    }
    else if(randomNumber1===6){
        var change = document.querySelectorAll(".image6")[0].setAttribute("src","https://www.pngitem.com/pimgs/m/614-6141042_library-of-6-dice-number-clip-royalty-free.png");
    }
    if(randomNumber2===1){
        var change = document.querySelectorAll(".image6")[1].setAttribute("src","https://t3.ftcdn.net/jpg/01/97/16/30/360_F_197163001_H2gm3LqIrVTm7Fne6kclwRDfMcfm57BC.jpg");
    }
    else if(randomNumber2===2){
        var change = document.querySelectorAll(".image6")[1].setAttribute("src","https://clipartix.com/wp-content/uploads/2016/09/2-dice-clipart-free-clipart-images-image.png");
    }
    else if(randomNumber2===3){
        var change = document.querySelectorAll(".image6")[1].setAttribute("src","https://t3.ftcdn.net/jpg/02/36/03/64/360_F_236036401_3s3HBOxeE5a51a08fOx4UXK6LH8RaZyT.jpg");
    }
    else if(randomNumber2===4){
        var change = document.querySelectorAll(".image6")[1].setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVanX8y3_bmVZTeW4rGqLJ_RkB1hpOVRjFpg&usqp=CAU");
    }
    else if(randomNumber2===5){
        var change = document.querySelectorAll(".image6")[1].setAttribute("src","https://www.pngkey.com/png/detail/91-917449_dots-clipart-five-five-side-of-dice.png");
    }
    else if(randomNumber2===6){
        var change = document.querySelectorAll(".image6")[1].setAttribute("src","https://www.pngitem.com/pimgs/m/614-6141042_library-of-6-dice-number-clip-royalty-free.png");
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
