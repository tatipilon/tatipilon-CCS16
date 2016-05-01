//P5.js
//Rando boats in Tahiti
var x =0;
var speed =20;
var beach;

//variable sailboats defined in order to attach moviment and display the sailboat (object)


function setup() {

  
  createCanvas(windowWidth,windowHeight);
  // specify multiple formats for different browsers
  beach = createVideo(['assets/waves2.mov',
                         'assets/waves2.mov']);
  beach.loop(); // set the video to loop and start playing
  beach.hide(); // by default video shows up in separate dom
                  // element. hide it and draw it to the canvas
                  // instead
  beach.volume(0.3);
  
};

function draw() 
{
  background(150);
  image(beach,-200,-200); // draw the video frame to canvas
  frameRate(10);
  if (x > width) {
  speed = -20;
  }
  x = x + speed;
  sailboat(x+50);
  
}

   function sailboat(x,y){
    //first triangle
    beginShape();
    noStroke();
    fill(254,0,2);
    vertex(x + 355, 20);
    vertex(x + 230,318);
    vertex(x + 345,318);
    endShape();

    //second triangle
    beginShape();
    fill(0,1,252);
    vertex(x+ 368, 20);
    vertex(x + 530,305);
    vertex(x+ 360, 305);
    endShape();
  
    //bottom of the boat
    beginShape();
    fill(255,255,1);
    vertex(x+ 180,   340);
    vertex(x + 560, 340);
    vertex(x + 530,  420);
    vertex(x + 220,  420);
    endShape();
  }




  
