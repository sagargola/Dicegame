let randomNumber1 =  Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var imaageFolder = "images/" + randomImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", imaageFolder );
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var imaageFolder2 = "images/" + randomImage2;

var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", imaageFolder2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏆Player 1 wins";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins 🏆";

}
else{
    document.querySelector("h1").innerHTML = "Draw !!!";

}