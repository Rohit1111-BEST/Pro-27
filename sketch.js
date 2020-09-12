
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob
var roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(260,300,100,90);
	bobObject1=new Bob(220,400,20,0);
	bobObject2=new Bob(240,400,20,0);
	bobObject3=new Bob(260,400,20,0);
	bobObject4=new Bob(280,400,20,0);
	bobObject5=new Bob(300,400,20,0);
	//bobObject6=new Bob(320,400,20,0);

	rope=new rope(bobObject.body,roofObject.body,bodyDiameter*2,0)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  bobObject6.display();

  drawSprites();
 
}



