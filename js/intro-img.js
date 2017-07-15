$(document).ready(function(){
   var isRunning = false;
   var timer;
$(window).bind("load resize", function(){
     clearInterval(timer);
     var winHt = $(window).width();
     $(function(){
          //alert(winHt);
          drawThroes(winHt);
     });
});
var drawThroes = function(winHt){
$("#canvas").empty();

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var W = winHt;
var H = 500;
canvas.width = W;
canvas.height = H;
ctx.clearRect(0, 0, canvas.width, canvas.height);
var numberFlakes = 100;
var flakes = [];
for (var i = 0; i < numberFlakes; i++) {
  flakes.push({
    x: Math.random()*W,
    y: Math.random()*H,
    radius: Math.random()*8+1
  })
}

function drawFlakes() {
  // Have to clear it every time to redraw
  ctx.clearRect(0, 0, W, H);

  ctx.fillStyle = "wheat";
  ctx.beginPath();
  for (var i = 0; i < numberFlakes; i++) {
    var f = flakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.radius, 0, Math.PI*2, true);
  }
  ctx.fill();
  moveFlakes();
}

var angle = 0;
function moveFlakes() {
  angle += 0.01;
  for (var i = 0; i < numberFlakes; i++) {
    var f = flakes[i];
    // cos and sin for moving diagonally
    f.y += Math.cos(angle) + 1 + f.radius/2;
    f.x += Math.sin(angle) * 2;

    //Start flakes over at top
    if (f.x > W+5 || f.x < -5 || f.y > H) {

      // Introduces some more random behavior to make the snowfall look real
      if (i%3 > 0) {
        flakes[i] = {x: Math.random()*W, y: -10, radius: f.radius};
      } else {
        // flake leaves from right
        if (Math.sin(angle) > 0) {
          // come in from left
          flakes[i] = {x: -5, y: Math.random()*H, radius: f.radius};
        } else {
          //come in from right
          flakes[i] = {x: W+5, y: Math.random()*H, radius: f.radius};
        }
      }
    }
  }
}

function drawText() {
  ctx.fillStyle = "rgb(255, 165, 0)";
  ctx.font = "lighter 3em Georgia";
  ctx.textAlign = "right";
  ctx.fillText("WINTER", W/1.7, H/2.3);

  ctx.fillStyle = "wheat";
  ctx.font = "lighter 4em";
  ctx.textAlign = "left";
  ctx.fillText("IS", W/2.5, H/1.9);

  ctx.fillStyle = "rgb(255, 153, 0)";
  ctx.font = "lighter 3";
  ctx.textAlign = "right";
  ctx.fillText("COMING", W/1.7, H/1.6);
}

function init() {
  isRunning = true;
  drawFlakes();
  drawText();
}

timer = setInterval(init, 30);
}
});
