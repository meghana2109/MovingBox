

function setup(){
  createCanvas(500,500);

  box = createSprite(250,250,50,50);
  box.shapeColor = "purple"

  edges = createEdgeSprites();

}

function draw(){
  background("pink");

  if(keyIsDown(UP_ARROW)){
    box.y = box.y - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y = box.y + 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x - 5;
  }

  box.bounceOff(edges);

  drawSprites();
}