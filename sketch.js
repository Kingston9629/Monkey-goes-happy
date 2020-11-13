
var monkey , monkey_running;
var bananaGroup, obstacleGroup;
var ground;
var bananaImage, obstacleImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
}



function setup() {
  
  monkey = createSprite(50,320,50,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(200,350,400,20);
  ground.velocityX =-4
  ground.x = ground.width /2;
}


function draw() {
background("white");
  
  monkey.collide(ground);
  
  if (keyDown("space")){
    monkey.velocityY = -5;
  }
    monkey.velocityY = monkey.velocityY + 1;
  
  if (ground.x < 0){
    ground.x = ground.width/2;
    }
  
  drawSprites();
  
}

function bananas(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600, 150, 20, 20);
    banana.y = Math.round(random(120,200));
    
  }
  
}