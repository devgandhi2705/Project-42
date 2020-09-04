const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var clock;
var centre;
//var hrHand,minHand,secHand;
 
var engine, world;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  clock=new Clock(400,400,300);
  centre=new Clock(-5,-10,10);

}

function draw() {
  Engine.update(engine);
  background(250,255,109);  
  clock.display();

  
  var hr=hour();
  var min=minute();
  var sec=second();
  var d = day();
  var yr = year();
  var mnth = month(); 

  textFont("Comic Sans MS");
  textSize(50);
  fill("black"); 
  text("12",-30,-250);
  text("1",100,-210);
  text("2",200,-120);
  text("3",250,0);
  text("4",210,150);
  text("5",120,250);
  text("6",-20,280);
  text("7",-150,240);
  text("8",-250,140);
  text("9",-290,-10);
  text("10",-240,-120);
  text("11",-150,-210);

  centre.display();

  
 
 
  secAngle= map(sec, 0,60,0,360); 
  minAngle= map(min, 0,60,0,360); 
  hrAngle= map(hr%12,0,12,0,360); 
  translate(0,0); 
  rotate(-90) 
  /*push(); 
  rotate(secAngle); 
  stroke("blue"); 
  strokeWeight(4); 
  line(-5,-200,-200,-200); 
  pop();*/

  push();
  rotate(secAngle);
  stroke("purple");
  strokeWeight(3);  
  line(0,0,100,200);
  pop();

  push();
  rotate(minAngle);
  stroke("green");
  strokeWeight(5);  
  line(0,0,150,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(9);  
  line(0,0,100,0);
  pop();

  drawSprites();
 
  /*strokeWeight(7);
  noFill();
  stroke(255,0,0);
  arc(0,0,610,610,0,secAngle);
  stroke(0,255,0);
  arc(0,0,630,630,0,minAngle);
  stroke(0,0,255);
  arc(0,0,650,650,0,hrAngle);*/
}

  

