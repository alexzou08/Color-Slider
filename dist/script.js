function doOrange() {
  var canvas = document.getElementById("can");
  canvas.style.backgroundColor="orange";
}

function doColor() {
  var canvas = document.getElementById("can");
  var inputColor = document.getElementById("clr");
  canvas.style.backgroundColor = inputColor.value;
}

function doSquare() {
  var sliderInput = document.getElementById("slr");
  var len = sliderInput.value;
  var canvas = document.getElementById("can");
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle = "mistyrose";
  context.fillRect(10,10,len,len);
  context.fillRect(parseInt(len)+20,10, len,len);
  context.fillRect(len*3,10,len,len);
}