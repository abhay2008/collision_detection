var moving_rect;
var rect;

function setup() {
  createCanvas(800, 400);
  moving_rect = createSprite(200, 200, 100, 50);
  moving_rect.shapeColor = "cyan";
  //moving_rect.velocityY = -3;
  rect = createSprite(400, 200, 100, 50);
  rect.shapeColor = "lime";
  //rect.veloctyY = 3;
}

function draw() {
  background(0);


  moving_rect.x = mouseX;
  moving_rect.y = mouseY;

  if (moving_rect.x - rect.x <= moving_rect.width / 2 + rect.width / 2 &&
    rect.x - moving_rect.x <= moving_rect.width / 2 + rect.width / 2 &&
    moving_rect.y - rect.y <= moving_rect.height / 2 + rect.height / 2 &&
    rect.y - moving_rect.y <= moving_rect.height / 2 + rect.height / 2) {
    rect.shapeColor = "red";
    moving_rect.shapeColor = "red";
  } else {
    moving_rect.shapeColor = "cyan";
    rect.shapeColor = "lime";
  }


  drawSprites();
}