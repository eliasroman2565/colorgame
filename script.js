var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


 easyBtn.addEventListener("click", function(){
   numSquares = 3;
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++ ){
    if(colors[i]){
      squares[i].style.background = colors[i];
    }else {
      squares[i].style.display = "none";
    }
  }

})

hardBtn.addEventListener("click", function(){
  numSquares = 6;
 hardBtn.classList.add("selected");
 easyBtn.classList.remove("selected");
 colors = generateRandomColors(numSquares);
 pickedColor = pickColor();
 for(var i = 0; i < squares.length; i++){
   squares[i].style.background = colors[i];
   squares[i].style.display = "block";
   }


})

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random color from arr
  pickedColor = pickColor();
  //resets the colorDisplay's text content
  colorDisplay.textContent = pickedColor;
  //resets resetButton's text content
  resetButton.textContent = "New Colors";
  //resets h1 color
  h1.style.background = "#4682B4";
  //change colors of squares
  for(var i = 0; i < squares.length; i++ ){
    squares[i].style.background = colors[i];
  }
  messageDisplay.textContent = "";
  this.textContent = "New Colors"

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  //add initial color to squares
  squares[i].style.background = colors[i]

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.background;

    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor);
      h1.style.background = clickedColor;
      resetButton.textContent = "Play Again?"
    }else {
      this.style.background = "#232323"
      messageDisplay.textContent = "Try Again"
    };
  });
}

function changeColors(color){
  // loop through all squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];

  //add num random colors to array
  for(var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";

  return red + green
}
