const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 
var engine, world; var ground, ball, ball1; 
var box1, box2,box3, box4, box5;
var ground;
var pig1, pig2;
var log1, log2, log3, log4, log5;
var bird1;
var bg;
var chain;


function preload(){
  bg=loadImage("bg.png");
}




function setup(){ 
  var canvas = createCanvas(1200,400); 
  engine = Engine.create(); 
  world = engine.world;
  
  
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(810,160,70,70);
  ground = new Ground(600,height,1200,20);
  pig1 = new Pig(810,350);
  pig2 = new Pig(810,220);
  log1 = new Log(810,260,300,PI/2);
  log2 = new Log(810,180,300,PI/2);
  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,100,-PI/7);
  bird1 = new Bird(100,100);
  log5 = new Log(200,180,80,PI/2);
  console.log(box2);

chain = new Chain(bird1.body,log5.body);
  

}



function draw() {
  background(bg); 
  Engine.update(engine);
  
box1.display();
box2.display();
ground.display();
pig1.display();
pig2.display();
log1.display();
log2.display();
box3.display();
box4.display();
box5.display();
log3.display();
log4.display();
log5.display();
bird1.display();
chain.display();






  

  //drawSprites();
}