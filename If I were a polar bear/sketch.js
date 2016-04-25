//P5.js
// If I were a polar bear
// particle system and image loading

var pole;

// particle system creates Aurora Borealis
  function Particle(loc) {
  this.loc = loc;
  this.acc = new p5.Vector();
  this.vel =  new p5.Vector(random(-1,1), random(-2,0));
  this.lifespan = 255;
}

Particle.prototype = {
  constructor: Particle,
  update : function(){  
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.lifespan -=2.0;
  },
  display : function(){
    
  // Aurora Borealis is a combination of particle sytem and interpolation
  //of HSB colors from light green to violet
  //FrameRate assigns the speed the particles are drawn
  
  frameRate(10)
  
  // colorFrom - colorTo = interpolates the colors
  // in the color wheel from pink (360) to light green
  //colorMode(HSB,360,30,100);
  colorFrom = color(360,30,100);
  
  colorTo = color(100,30,100);

  var lerpAmt = map(this.loc.x, this.loc.y, width,0.75,2.0);

  var lerpedCol = lerpColor(colorFrom,colorTo,lerpAmt);
  stroke(0,this.lifespan);
  fill(lerpedCol,this.lifespan);
  
  // for loop to optimize particle mapping
  for (var t = -600; t<601; t=t+50) {
  ellipse(this.loc.x+t, this.loc.y+60, random(20),random (20));
};
  
  }  
};

var particles = [];

//loadImage loads the Background pictures as user substitutes tittles northpole or northpole2
function setup(){
  createCanvas(windowWidth,windowHeight);
  pole = loadImage('image/northpole2.jpg');
  
  for (var i=0; i< 250; i++){
    particles[i] = new Particle(new p5.Vector(width/2, height/2));
    
  }
}

 // image() places the jpg in the background of the canvas
function draw() {
  image(pole,0,0,pole.width,pole.height,
  0,0,width,pole.height);
  //background(0);
  
  for (var i=0; i < particles.length; i++){
    particles[i].update();
    particles[i].display();
  }
}



