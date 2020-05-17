const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

gameState = "onSling";

var score = 0;


function setup(){
  var canvas = createCanvas(window.innerWidth,window.innerHeight);
  engine = Engine.create();
  world = engine.world;

  main_ground = new Ground(width/2,height,width,20);
  base1 = new Ground(1000,400,250,20);

  box1 = new Box(950,300);
  box2 = new Box(1050,380);
  box3 = new Box(950,380);

  box4 = new Box(1000,220);
  box5 = new Box(1050,300);

  log1 = new Log(910,360,15,60);
  log2 = new Log(990,360,15,60);
  log3 = new Log(950,320,100,15);
  
  log4 = new Log(1010,360,15,60);
  log5 = new Log(1090,360,15,60);
  log6 = new Log(1050,320,100,15);

  log7 = new Log(910,300,15,60);
  log8 = new Log(990,300,15,60);
  log9 = new Log(950,250,100,15);

  log10 = new Log(1010,300,15,60);
  log11 = new Log(1090,300,15,60);
  log12 = new Log(1050,260,100,15);

  log13 = new Log(960,220,15,60);
  log14 = new Log(1040,220,15,60);
  log15 = new Log(1000,180,100,15); 

  player = new Player(300,400);

  slingshot = new SlingShot(player.body,{x:300, y:400});
} 



function draw() {
  background("black");  
  Engine.update(engine);


  textSize(30);
  fill("white");
  text("Score- " + score,200, 50);

  base1.display();

  main_ground.display();
  box1.display();  
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box1.score();  
  box2.score();
  box3.score();
  box4.score();
  box5.score();


  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();
  log6.display();
  log7.display();
  log8.display();
  log9.display();
  log10.display();
  log11.display();
  log12.display();
  log13.display();
  log14.display();
  log15.display();  

  player.display();

 
  slingshot.display();
  
}


function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    World.remove(world,player.body);
    player = new Player(300,400);
    slingshot.attach(player.body);
    gameState = "onSling";
  }
}