var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

fixedRect= createSprite(400,200,50,80)
movingRect= createSprite(600,200,80,50)

fixedRect.shapeColor= "green"
movingRect.shapeColor= "green"


}

function draw() {
  background(0,0,0);  

  movingRect.x= mouseX;
  movingRect.y= mouseY;


if( movingRect.x- fixedRect.x < movingRect.width/2+fixedRect.width/2){

  fixedRect.shapeColor= "red";
  movingRect.shapeColor= "red";

}
else {
  fixedRect.shapeColor= "green";
  movingRect.shapeColor= "green";

}


  drawSprites();
}


