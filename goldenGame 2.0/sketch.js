//Create variables here
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tank1,ground1;
var backgroundImg;
var lasers,btn;
var hearts = [];

function preload()
{
	//load images here
   getBackgroundImg();
   p1Img = loadImage("images/p1.png");
   p2Img = loadImage("images/p2.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  var p1 = createSprite(displayWidth-1120,displayHeight-700,100,50);
  p1.addImage("player1",p1Img);
  p1.scale = 0.25;

  var p2 = createSprite(displayWidth-390,displayHeight-700,100,50);
  p2.addImage("player2",p2Img);
  p2.scale = 0.6;

  tank1 = new Tank(windowWidth-1200,height-145);
  tanktop1 = new Tanktop(windowWidth-1200,height-205);
  compTank = new CTank(windowWidth-100,height-145);
  ground1 = new Ground(windowWidth/2,height-55,width,height/4-50);
  stroke("red");
  strokeWeight(11);
  lasers = new Laser(450,350);
  btn = new Btn();
  firework = new Fireworks(170,height-145);

  for(var a = displayWidth-280 ; a<=width-100 ; a=a+40){
    hearts.push(new Hearts(a,displayHeight-700));
  }

  for(var b = displayWidth-1020 ; b<=width-860 ; b=b+40){
    hearts.push(new Hearts(b,displayHeight-700));
  }
}


function draw() {  
  
  if(backgroundImg)
  background(backgroundImg);

  Engine.update(engine);
  tank1.display();
  tanktop1.display();
  compTank.display();
  ground1.display();
  btn.display();
  firework.display();

  for(var i = 0 ; i < hearts.length ; i++){
    hearts[i].display();
  }
  for(var v = 0 ; v < hearts.length ; v++){
    hearts[v].display();

  }
  
    
   drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json(); 
  var datetime = responseJSON.datetime; 
  var hour = datetime.slice(11,13);
  if(hour>=06 && hour<=17){
    bg = "images/background/rust evening.png"; 
  }    
  else{ 
    bg = "images/background/green night.png";
  } 
  backgroundImg = loadImage(bg);
  }

function keyPressed(){ 
	if(keyCode === 32){
		Matter.Body.applyForce(firework.body,firework.body.position,{x:60,y:-120})
	}

  /*

  if(keyCode===32)
  {
   // for(var i = 0;i<this.lasers.length;i++)
     // {
        lasers.update();
        lasers.show();
        lasers.applyForce(5);
     // }
  }*/
}


