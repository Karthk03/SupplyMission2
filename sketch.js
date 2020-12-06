var helicopterIMG, helicopterSprite;
var packageBody,ground;
var flag = false;
var background_img;
var part1,part2,part3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	background_img = loadImage("Sprites/Sky.png");
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);
	

	// packageSprite=createSprite(width/2, 80, 10,10);
	// packageSprite.addImage(packageIMG);
	// packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	// groundSprite=createSprite(400, 650, 800,50);
	// groundSprite.shapeColor=color("brown");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 260 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground

	ground = Bodies.rectangle(400, 650, 800, 50 , {isStatic:true} );
	World.add(world, ground);
	 
	part1= new Crate(400,600,200,90);
	part2= new Crate(300,550,100,180);
	part3= new Crate(500,550,100,180);


	//Engine.run(engine);
  
}


function draw() 
{
  background(background_img);
  Engine.update(engine)
  
  part1.display();
  part2.display();
  part3.display();

  rectMode(CENTER);
  fill("brown");
  rect(400, 650, 800, 50);

  var pos = packageBody.position

  ellipseMode(CENTER);
  fill("yellow");
  ellipse(pos.x, pos.y, 10)

  if(keyDown("RIGHT"))
  {
	helicopterSprite.velocityX = +5;
	if(flag == false)
	{
		packageBody.position.x = helicopterSprite.x;
	}
  }
  if(keyWentUp("RIGHT"))
  {
	helicopterSprite.velocityX = 0;
  }
  if(keyDown("LEFT"))
  {
	helicopterSprite.velocityX = -5;
	if(flag == false)
	{
		packageBody.position.x = helicopterSprite.x;
	}
  }
  if(keyWentUp("LEFT"))
  {
	helicopterSprite.velocityX = 0;
  }
  drawSprites();
  //keyPressed();
}

function keyPressed() 
{
	if (keyCode === DOWN_ARROW) 
	{
		Matter.Body.setStatic(packageBody,false);
	
		flag = true;
	}
}



