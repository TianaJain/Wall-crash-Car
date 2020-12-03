function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="blue";
  fixedRect=createSprite(200,300,80,80);
  fixedRect.shapeColor="blue";

}

function draw() {
  background(0); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  drawSprites();

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
        fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
        movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
        fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="Yellow";
    fixedRect.shapeColor="Yellow";
  }
  else {
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
}

