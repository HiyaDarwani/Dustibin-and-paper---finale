
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
   floor = new Ground(400, 700, 800, 20)
   wall = new Dustbin(630, 600, 30, 200)
   ball = new Paper(100, 100, 25)
    
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("White");
  
  drawSprites();
  
  floor.display();
  wall.display();
  ball.display();
 

}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:40, y:-70})
  }
}


