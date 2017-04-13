var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

/* easyButton.addEventListener("click", function(){
  colors = generateRandomColors(3);

  pickedColor = pickColor();

  colorDisplay.textContent = pickedColor;

  for(var i = 0; i < squares.length; i++ ){
    squares[i].style.background = colors[i];
  }

})*/

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(6);
  //pick new random color from arr
  pickedColor = pickColor();
  //resets the colorDisplay's text content
  colorDisplay.textContent = pickedColor;
  //resets resetButton's text content
  resetButton.textContent = "New Colors";
  //resets h1 color
  h1.style.background = "#232323";
  //change colors of squares
  for(var i = 0; i < squares.length; i++ ){
    squares[i].style.background = colors[i];
  }

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
