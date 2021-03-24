
var bob1,bob2,bob3,bob4,bob5;
var roof;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Ground(400,200,500,30);
	bob1 = new Bob(250,250,30);
	bob2 = new Bob(300,250,30);
	bob3 = new Bob(350,250,30);
	bob4 = new Bob(400,250,30);
	bob5 = new Bob(450,250,30);

    chain1 = new Chain(bob1.body,{x:250,y:200})
    chain2 = new Chain(bob2.body,{x:300,y:200})
    chain3 = new Chain(bob3.body,{x:350,y:200})
    chain4 = new Chain(bob4.body,{x:400,y:200})
    chain5 = new Chain(bob5.body,{x:450,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  roof.showground();
  bob1.showbob();
  bob2.showbob();
  bob3.showbob();
  bob4.showbob();
  bob5.showbob();

}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-200})
  }
}
