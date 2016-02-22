boat using vertex() on P5.js
function setup() {
  createCanvas(windowWidth,windowHeight);
  background (178,212,237);
}

function draw() {
// little sail boat drawing using vertex function  
//first triangle
  beginShape();
  noStroke();
  vertex(555,20);
  vertex(430,318);
  vertex(545,318);
  endShape();
  fill(254,67,53);
//second triangle
beginShape();
  vertex(568,20);
  vertex(730,305);
  vertex(560,305);
  endShape();
  fill(254,254,246);
//bottom of the boat

beginShape();
  vertex(380,340);
  vertex(760,340);
  vertex(730,420);
  vertex(420,420);
  endShape();
  fill(17,26,207);

;
  

}