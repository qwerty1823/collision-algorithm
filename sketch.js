var fixed_rectangle
var moving_rectangle
function setup() {
  createCanvas(800,400);
  fixed_rectangle = createSprite(400, 200, 50, 30);
  fixed_rectangle.shapeColor = "green"
  moving_rectangle = createSprite(500,100,30,50)
  moving_rectangle.shapeColor = "green"
}

function draw() {5
  background(255,255,255);
  moving_rectangle.x = World.mouseX
  moving_rectangle.y = World.mouseY
  console.log (moving_rectangle.x - fixed_rectangle.x)
  if((moving_rectangle.x-fixed_rectangle.x < fixed_rectangle.width/2 + moving_rectangle.width/2)
  &&
  (fixed_rectangle.x - moving_rectangle.x < fixed_rectangle.width/2 + moving_rectangle.width/2)
  &&
  (moving_rectangle.y - fixed_rectangle.y < fixed_rectangle.height/2 + moving_rectangle.height/2)
  &&
  (fixed_rectangle.y - moving_rectangle.y < fixed_rectangle.height/2 + moving_rectangle.height/2)){
    fixed_rectangle.shapeColor = "red"
    moving_rectangle.shapeColor = "red"
  }
  else{
    fixed_rectangle.shapeColor = "green"
    moving_rectangle.shapeColor = "green"
  }
  drawSprites();
}