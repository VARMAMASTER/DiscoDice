var random_number1 = Math.round(Math.random()*10/2+1)
var random_number2 = Math.round(Math.random()*10/2+1)
// populating he DOM my injectiong the random images
var image1 = "images/d"+random_number1+".jpg"
var image2 = "images/d"+random_number2+".jpg"
document.getElementById("im1").setAttribute("src", image1)
document.getElementById("im2").setAttribute("src", image2)
////////// 

if (random_number1 >random_number2) 
{
    document.querySelector("h1").innerHTML  = " 🚩 Player 1 won the game"
} 
else if (random_number1 < random_number2) 
{
    document.querySelector("h1").innerHTML  = "🚩 Player 2 won the game"
}
else
{
    document.querySelector("h1").innerHTML  = " Draw !"
} 
