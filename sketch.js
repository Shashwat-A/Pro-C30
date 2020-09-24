const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var can1,can2,can3,can4,can5,can6,can7,can8,can9,can10,can11,can12,can13,can14,can15,can16;
var polygan;
var sling

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  //making the base of tower
  ground = new Ground(920,300, 290, 25);

  //First Layer
  can1 = new Can(810, 260, 35, 60);
  can2 = new Can(846, 260, 35, 60);
  can3 = new Can(882, 260, 35, 60);
  can4 = new Can(918, 260, 35, 60);
  can5 = new Can(954, 260, 35, 60);
  can6 = new Can(990, 260, 35, 60);
  can7 = new Can(1026, 260, 35, 60);

  //Second layer
  can8 = new Can(846,  210, 35, 60);
  can9 = new Can(882,  210, 35, 60);
  can10 = new Can(918, 210, 35, 60);
  can11 = new Can(954, 210, 35, 60);
  can12 = new Can(990, 210, 35, 60);

  //Third Layer
  can13 = new Can(882, 170, 35, 60);
  can14 = new Can(918, 170, 35, 60);
  can15 = new Can(954, 170, 35, 60);

  //Top Can
  can16 = new Can(918, 130, 35, 60);

  //Shooter Polygan
  polygan = new Polygan(100, 200); 

  //Constraining the polygan
  sling = new Sling(polygan.body, {x: 200, y:170}, 0.2, 80);
}

function draw() {
  background("white"); 
  Engine.update(engine); 
  
  ground.display();

  //First Layer
  can1.display();
  can2.display();
  can3.display();
  can4.display();
  can5.display();
  can6.display();
  can7.display();

  //Second Layer
  can8.display();
  can9.display();
  can10.display();
  can11.display();
  can12.display();

  //Third Layer
  can13.display();
  can14.display();
  can15.display();

  //Sling
  sling.display();

  //Top Can
  can16.display();

  //Shooter Polygan
  polygan.display();
}

function mouseDragged() {   
  Matter.Body.setPosition(polygan.body, {x: mouseX, y: mouseY});
}

function mouseReleased () {
  sling.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    sling.attach(polygan.body);
  }
}