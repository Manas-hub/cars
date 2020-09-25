var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50, 200, 50, 50);
  car.shapeColor = "230,230,0"
  wall=createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255);
  car.velocityX = speed;
  if(car.isTouching(wall)){
    Deformation = 0.5 * weight * speed * speed / 2500

    if (deformation <100 ){
      car.shapeColor = "0,250,0"
    }
    if (deformation > 100 < 180){
      car.shapeColor = "230,230,0"
    }
    if (deformation >180 ){
      car.shapeColor = "250,0,0"
    }
  }  
  drawSprites();
}
function isTouching(){
if((moveRect2.X-movingRect1.X<=moveRect2.width/2+movingRect1.width/2)
  &&(movingRect1.X-moveRect2.X<= moveRect2.width/2+movingRect1.width/2)
  &&(moveRect2.Y-movingRect1.Y<=moveRect2.hieght/2+movingRect1.height/2)
  &&( movingRect1.Y-moveRect2.Y<=moveRect2.hieght/2+movingRect1.height/2)){
    isTouching=true;
    }
    else {
    isTouching=false;
    }
}