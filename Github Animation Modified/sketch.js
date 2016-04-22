//code by:
// https://github.com/Jared-Sprague
var flyingBird;
var mountain;
var dest;//destination for our running cat
var isRunning = false;
var dX = 0;//our initial x pos of the cat
function setup() {
  frameRate(5);
  createCanvas(windowWidth,windowHeight);

  mountain = loadImage('image/mountains.jpg');
 flyingBird = loadImage('image/bird animation.png');
}

var sX = 0, sY = 0;

function draw() {
  clear();
  image(mountain,0,0,mountain.width,mountain.height,
  0,0,width,mountain.height);

  // Animate running cat
  
  sX += 300;
  if (sX > 300) {
    sX = 0;
    sY += 150;
    if (sY === 600) {
      sY = 0;
    }
  }
  if(isRunning){
    println("running");
    runToDest();
    if(dX >= dest.x){
      sX = 10;
      isRunning = false;      
    }

  } else{
    image(flyingBird, sX, sY, 300, 150, 170, 100, 400, 350);
  }
  // Show full sprite sheet for reference
  //image(runningCat, 0, 500, 500, 500);
}
function runToDest(){
  dX +=5.0;
  image(flyingBird, sX, sY, 300, 150, dX, 100, 400, 350);
}

function mouseClicked(){
  isRunning = true;
  dest= createVector(mouseX,mouseY);
  println(dest.x);
}