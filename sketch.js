var pcar,car2,car3,car4,road,roads,car5,car6, roadEdge,roadEdge2
var line

var star,car,control;

var PLAY = 1;
var END = 0;
var gameState 
    
var  carSound
var Distance = 15000

function preload(){
  roads = loadImage("road1.png")
  car21 = loadImage("car2.png")
  car31 = loadImage("car3.png")
  car41 = loadImage("car4.png")
  car51 = loadImage("car5.png")
  car61 = loadImage("car5.png")
  pcars = loadImage("pcar.png")
  stars = loadImage("star.png")
  cars = loadImage("car.png")
  controls = loadImage("control.png")
  carSound = loadSound("SOUNDS/start theme.mp3")
}

function setup() {
  createCanvas(2050,1000)


  road = createSprite(298,400)
  road.addImage(roads)
  road.scale = 2.2
  //road.velocityY = 

  pcar = createSprite(300,800)
 pcar.addImage(pcars)
 pcar.scale = 0.2
pcar.velocityY = -0.15

car2= new Group();
car3= new Group();
car4= new Group();
car5= new Group();
car6= new Group();

roadEdge = createSprite(20,10,20,1510)
roadEdge.visible = false;
roadEdge2 = createSprite(580,10,20,1510)
roadEdge2.visible = false;

star = createSprite(750,910)
star.addImage(stars)
star.scale = 0.5

car = createSprite(1500,50)
car.addImage(cars)
car.scale = 0.5

control = createSprite(900,540)
control.addImage(controls)
control.scale = 0.5






}

function draw() 
{
  //pcar.x = World.mouseX;
background("green")


  


  

if(Distance <= 0){

  fill("white")
  textSize(60)
  text("YOU WIN!",800,330)

  gameState = END
  
}

if(keyDown("space")){
  gameState = PLAY
  pcar.x = 300
  Distance = 15000
  
}    

 if(gameState === PLAY){
  
  carSound.play();
  road.velocityY = 10
  if(keyDown("right")){
    pcar.x = pcar.x+6;
  }
  
  if(keyDown("left")){
    pcar.x = pcar.x-6;
  }

  var car = Math.round(random(1,4));
  
  if (World.frameCount % 30 == 0) {
    if (car == 1) {
       yellowCar();
    } else if (car == 2) {
      greenCar();
    } else if (car == 3) {
      blueCar();
    } else if (car = 4 ) {
      blackCar();
    } else {
      orangeCar();
    }
  }
  pcar.collide(roadEdge)
  pcar.collide(roadEdge2)

  if (road.y > 608){
    road.y = road.height/2;
  }
  
  
  if(car2.isTouching(pcar)){
 gameState = END
  }
if(car3.isTouching(pcar)){
 gameState = END
  }
 if(car4.isTouching(pcar)){
   gameState = END
    }
    if(car5.isTouching(pcar)){
     gameState = END
       }
     if(car6.isTouching(pcar)){
      gameState = END
      
      }
      fill("white")
      textSize(60)
      text("Distance: "+Distance,800,130)
      Distance = Distance-Math.round(frameCount / 120 )

       

      
}
else if   (gameState === END){
  road.velocityY = 0
 pcar.velocityY = 0
  if(car2.isTouching(pcar)){
    car2.setVelocityEach(0)
    car3.setVelocityEach(0)
    car4.setVelocityEach(0)
    car5.setVelocityEach(0)
    car6.setVelocityEach(0)

  }
  if(car3.isTouching(pcar)){
    car2.setVelocityEach(0)
    car3.setVelocityEach(0)
    car4.setVelocityEach(0)
    car5.setVelocityEach(0)
    car6.setVelocityEach(0)

  }
  if(car4.isTouching(pcar)){
    car2.setVelocityEach(0)
    car3.setVelocityEach(0)
    car4.setVelocityEach(0)
    car5.setVelocityEach(0)
    car6.setVelocityEach(0)

  }
  if(car5.isTouching(pcar)){
    car2.setVelocityEach(0)
    car3.setVelocityEach(0)
    car4.setVelocityEach(0)
    car5.setVelocityEach(0)
    car6.setVelocityEach(0)

  }
  if(car6.isTouching(pcar)){
    car2.setVelocityEach(0)
    car3.setVelocityEach(0)
    car4.setVelocityEach(0)
    car5.setVelocityEach(0)
    car6.setVelocityEach(0)

  }
  fill("red")
  textSize(40)
  text(" GAME OVER!  ", 1100,550)

}

fill("white")
      textSize(30)
      text("OBJECTIVE - COVER THE DISTANCE WITHOUT CRASHING",800,930)

      fill("white")
      textSize(50)
      text("CAR RUSH ", 1100,50)

      fill("white")
      textSize(40)
      text(" press SPACE to begin or reset  ", 600,750)

      fill("white")
      textSize(40)
      text(" use ARROW KEYS to move the car  ", 600,650)

      fill("white")
      textSize(40)
      text(" CONTROLS:-  ", 600,550)


drawSprites();
}
function yellowCar() {
  var y = createSprite(Math.round(random(130, 370)), 10, 10);
  y.addImage(car21);
  y.velocityY = 10;
  y.lifetime = 220;
  y.scale = 0.9
  car2.add(y)
}
function blueCar() {
  var blue = createSprite(Math.round(random(120, 470)), 10, 10);
  blue.addImage(car31)
  blue.velocityY = 10;
  blue.lifetime = 220;
  blue.scale = 0.9;
  car3.add(blue)
}

function greenCar() {
  var green = createSprite(Math.round(random(120, 470)), 10, 10);
  green.addImage(car41);
  green.velocityY = 10;
  green.lifetime = 220;
  green.scale = 0.9;
 car4.add(green)
}

function blackCar() {
  var b = createSprite(Math.round(random(120, 470)), 10, 10);
  b.addImage(car51);
  b.velocityY =10;
  b.lifetime = 220;
  b.scale = 0.9
 car5.add(b)
}


function orangecCar() {
  var o = createSprite(Math.round(random(120, 470)), 10, 10);
  o.addImage(car61);
  o.velocityY = 10;
  o.lifetime = 220;
  o.scale = 0.9
 car6.add(o)
}




      

