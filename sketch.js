
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Ball = new ball (100,600,100,10);

	ground = new Ground (400,680,800,20);

	leftbase = new dustbin(550,620,20,100);
	bottombase = new dustbin(610,660,100,20);
    rightbase = new dustbin(670,620,20,100);

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 Engine.update(engine);

  Ball.display();

  ground.display();

  leftbase.display();
  bottombase.display();
  rightbase.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Ball.body,Ball.body.position,{x:85,y:-85})
	}
}



