var box;
function setup() {
  createCanvas(400, 400);
  box = createSprite(150,150,20,30);
}


function draw() {
  background(220);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x += 5;
  }
  drawSprites();
  
}
