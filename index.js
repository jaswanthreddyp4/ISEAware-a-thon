function refreshPage(){
    location.reload();
}


var random1=Math.floor((Math.random()*6))+1;
var randomHand1Image="images/"+random1+".jpg";

var random2=Math.floor(Math.random()*6)+1;
var randomHand2Image="images/"+random2+".jpg";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomHand1Image);

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomHand2Image);


if(random1>random2){
    document.querySelector("h1").innerHTML="🏆Player 1 Won";
    var audio=new Audio('audio/player1.mp3');
    audio.play();
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="🏆Player 2 Won";
    var audio=new Audio('audio/player2.mp3');
    audio.play();
}
else{
document.querySelector("h1").innerHTML="its a draw! ,Play again !";
var audio3=new Audio('audio/draw.mp3');
audio3.play();
}


