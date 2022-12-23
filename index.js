var randomNumber1=Math.floor(Math.random()*6)+1;//1-6

var randomDiceImage="dice " + randomNumber1 +".png";//dice 1/png- dice6.png

var randomImagesource="images/"+  randomDiceImage;

var image1 =document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImagesource2="images/dice"+  randomNumber2+ ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImagesource2);

if(randomNumber1>randomNumber2){
    document.querySelectorAll("h1").innerHTML="player 1 wins!";

}
else if(randomNumber2>randomNumber1){
    document.querySelectorAll("h1").innerHTML="player 2 wins!";

}
else{
    document.querySelectorAll("h1").innerHTML="Draw!";
}