Little Sailboat using P5.js

function setup() {
  createCanvas(1000,1000);
  background (178,212,237);
}

// little sailboat drawing using vertex(),beginShape(),endShape() and for loops on P5.js 

function draw() {
//first triangle
  beginShape();
  noStroke();
  fill(254,0,2);
  vertex(355,20);
  vertex(230,318);
  vertex(345,318);
  endShape();

//second triangle
beginShape();
  fill(0,1,252);
  vertex(368,20);
  vertex(530,305);
  vertex(360,305);
  endShape();
  
//bottom of the boat
beginShape();
  fill(random (255), 255,1);
  vertex(180,340);
  vertex(560,340);
  vertex(530,420);
  vertex(220,420);
  endShape();

//waves using for loop

beginShape();
 for (var x = 0; x <= 1000; x = x + 150){
  for (var y = 0; y <= 1000; y = y + 150) {
    strokeWeight(20);
    stroke(random(255),255,255);
    fill(178,212,237);
    arc(80 + x,430 + y+ mouseY,150,150,0,PI);
                                        }
                  }

  endShape();


}