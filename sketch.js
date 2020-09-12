
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob
var roof
var rope

function preload()
{

}

function setup() {
	createCanvas(800, 700);
 var bodyDiameter=40
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(260,300,200,10);
	bobObject1=new Bob(220,400,20,0);
	bobObject2=new Bob(240,400,20,0);
	bobObject3=new Bob(260,400,20,0);
	bobObject4=new Bob(280,400,20,0);
	bobObject5=new Bob(300,400,20,0);
	//bobObject6=new Bob(320,400,20,0);

	rope1=new Rope(bobObject1.body,roof.body,-bodyDiameter*2,0)
	rope2=new Rope(bobObject2.body,roof.body,-bodyDiameter,0)
	rope3=new Rope(bobObject3.body,roof.body,0,0)
	rope4=new Rope(bobObject4.body,roof.body,bodyDiameter,0)
	rope5=new Rope(bobObject5.body,roof.body,bodyDiameter*2,0)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();

  drawSprites();
 
}



