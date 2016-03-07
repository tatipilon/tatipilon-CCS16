// Animated Sailboat using P5.js

// Sailboat drawing using vertex(),beginShape(),endShape() and for loops

//variable sailboats defined in order to attach moviment and display the sailboat (object)
var sailboats = [];

function setup()
{
  createCanvas(1000,1000);
 
// for loop to determine the number of boats on the screen (up to 7) 
  for(var b = 0; b <7; b++)
  {
  
  sailboats[b] = new Sailboat();
  }
}
 
function draw()
{
// function sailboats.sail makes the sailboats navigate throught the screen
// function sailboats.displays shows the sailboat/object
  
  background (178,212,237);
  for(var i = 0; i < sailboats.length; i++)
  {
    sailboats[i].sail();
    sailboats[i].display();
  }      
  
}
 
function Sailboat(ypos, speed)
{
  this.xpos = random(width);
  this.ypos = random(height);
  this.speed = random(3); 
 
// navigation method allows the sailboat to start before the screen (-200) to end (1000)
  this.sail = function()
  {
    if(this.xpos > width)
    {
      this.xpos = -200; 
      this.ypos = random(height);
    }
    this.xpos = this.xpos + this.speed;        
  }
 
//display function calls the sailboat drawing
  this.display = function()
  {
    
// Sailboat drawing modified with this.xpos + original x1 & this.ypos + original y1
// Sailboat drawing from Top to bottom

//first triangle
  beginShape();
  noStroke();
  fill(254,0,2);
  vertex(this.xpos + 355, this.ypos + 20);
  vertex(this.xpos + 230, this.ypos + 318);
  vertex(this.xpos + 345,this.ypos + 318);
  endShape();

//second triangle
beginShape();
  fill(0,1,252);
  vertex(this.xpos + 368, this.ypos + 20);
  vertex(this.xpos + 530, this.ypos + 305);
  vertex(this.xpos + 360, this.ypos + 305);
  endShape();
  
//bottom of the boat
beginShape();
  fill(255,255,1);
  vertex(this.xpos + 180, this.ypos + 340);
  vertex(this.xpos + 560, this.ypos + 340);
  vertex(this.xpos + 530, this.ypos + 420);
  vertex(this.xpos + 220, this.ypos + 420);
  endShape();
  
  
}

}

