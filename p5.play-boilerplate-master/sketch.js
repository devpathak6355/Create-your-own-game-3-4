var palyer,playerImg;
var opponent,opponentImg,opponentGroup;
var bullet,bulletImg,bulletGroup;
var coin,coinImg;
var backgroundImg,background1;
var PLAY=1;
var END=0;
var gameState=PLAY;
function preload(){
  playerImg=loadImage("Images/p.png");
  opponentImg=loadImage("Images/E.png");
  bulletImg=loadImage("Images/b.png");
  backgroundImg=loadImage("Images/Background.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  background1=createSprite(windowWidth/2, windowHeight/2, windowWidth, 50);
  background1.addImage(backgroundImg);
  background1.velocityY=1;

  player=createSprite(windowWidth/2,windowHeight-50,10,10);
  player.addImage(playerImg);
  player.scale=0.2

  bulletGroup=new Group();
  opponentGroup=new Group();
}

function draw() {
  background(255,255,255); 
  
  if(gameState===PLAY){
    background1.velocityY=1;
    if(background1.y>windowHeight){
      background1.y=windowHeight/2
      console.log(background1.y);
    }

    if(keyDown(LEFT_ARROW)){
      player.x=player.x-10;
    }
    if(keyDown(RIGHT_ARROW)){
      player.x=player.x+10;
    }

    if(keyWentDown("space")){
      bulletCall();
    }
    opponentCall();

    for(var i=0; i<opponentGroup.length; i++){
    if(bulletGroup.isTouching(opponentGroup)){
      opponentGroup.get(i).destroy();
      bulletGroup.destroyEach();
    }
    }

    if(player){

    }

  }
  if(gameState===END){

  }

  drawSprites();
}
function bulletCall(){

  bullet=createSprite(player.x,player.y,10,10);
  bullet.addImage(bulletImg);
  bullet.velocityY=-3;
  bullet.scale=0.1;
  bullet.depth=player.depth;
  player.depth+=1;
  bulletGroup.add(bullet);

}

function opponentCall(){

  if(frameCount%60===0){

    opponent=createSprite(Math.round(random(100,windowWidth-100)),0,10,10);
    opponent.addImage(opponentImg);
    opponent.velocityY=5;
    opponent.scale=0.7;
    opponentGroup.add(opponent);

  }

}