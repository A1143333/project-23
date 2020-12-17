var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 20,20);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width, 20);
	groundSprite.shapeColor=color("green")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution: 0.3, isStatic:true});
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box2 = new Box(500,605,20,100,"red");
	box3 = new Box(295,605,20,100,"red");
	box1 = new Box(400,645,200,20,"red");
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  fill("blue")
  textSize(45);
  textFont("Algerian");
  text("SUPPLY MISSION 2 BY ASHRITH",100,50);

  drawSprites();

  if(keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(packageBody,false);
	}	
	box1.display();
	box2.display();
	box3.display();

  Engine.update(engine);
}