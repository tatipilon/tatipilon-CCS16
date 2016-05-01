//If I were a Sailboat
//P5.js
//NYU Creative Coding Book Spring 2016
//Tatiana Pilon

// Sailboat drawing on P5.js and paradisiac beach video

// defines variables for x and y position
// variable speed defines sailing speed
// variable beach displays background video 
var x =0;
var y = 200;
var speed = 20;
var beach;


function setup() 
{

  createCanvas(windowWidth,windowHeight);
  // specify multiple formats for different browsers
  beach = createVideo(['assets/waves2.mov',
                         'assets/waves2.mov']);
  beach.loop(); // set the video to loop and start playing
  beach.hide(); // by default video shows up in separate dom
                  // element. 
  beach.volume(0.3); // sets the volume of the video
  

};

function draw() 
{
  background(150);
  image(beach,-200,-200); // draw the video frame to canvas
  frameRate(10); // sets the speed of the sailboat
    if (x > width) // draws the sailboat on the x coordinate
    {
      speed = -20; // sets the sailboat "bounce back" speed
    };
    x = x + speed;
    // draws the sailboat on the x positions of the canvas
    // y position = 200, set as a variable on the beggining of the code
    sailboat(x - 300);
    sailboat (x + 600);
    sailboat (x - 1000);
};

// function sailboat draws the shape of a sailboat
function sailboat(x)
{
  //first triangle
  beginShape();
  noStroke();
  fill(254,0,2);
  vertex(x + 355,y + 20);
  vertex(x + 230,y + 318);
  vertex(x + 345,y + 318);
  endShape();

  //second triangle
  beginShape();
  fill(0,1,252);
  vertex(x+ 368, y + 20);
  vertex(x + 530,y + 305);
  vertex(x+ 360, y + 305);
  endShape();
  
  //bottom of the boat
  beginShape();
  fill(255,255,1);
  vertex(x+ 180,y + 340);
  vertex(x + 560,y + 340);
  vertex(x + 530,y + 420);
  vertex(x + 220,y + 420);
  endShape();
};