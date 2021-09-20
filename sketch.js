
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;



function preload()
{
	
}

function setup() {
	createCanvas(500,400 );


	engine = Engine.create();
	world = engine.world;

	groundObj=new ground(width/2,670,width,20);
	leftside=new ground(1100,600,20,120);



	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	
	}

	//Create the Bodies Here.
	ball=Bodies.circle(100,200,20,ball_options)
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})

	}

}



