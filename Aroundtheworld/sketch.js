//P5.js
//Around the world

var world;
var img;

function setup() {

    createCanvas (windowWidth,windowHeight);
    world = createVideo (['assets/aroundtheworld.mp4'])
    world.loop ();
    world.hide();
    world.volume(0.3);
    
    img = loadImage ("assets/unicorn.png")
}

function draw() {
  image(world,-100,-100);
  image(img,mouseX,mouseY);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}
