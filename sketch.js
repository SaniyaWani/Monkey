
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	bgImage=loadImage("bg.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;
//	form=new Form();

	//Create the Bodies Here.
	monkey = new Monkey(300,300,10,10);
//	stone = new Stone(75,255);
//	rope = new SlingShot (stone.body,{x:75,y:255});


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
    rectMode(CENTER);
    background(bgImage);
    monkey.display();
	// stone.display();
	// rope.display();
 // form.display();
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
   }
   
   function mouseReleased()
   {
	     rope.fly();
   }

