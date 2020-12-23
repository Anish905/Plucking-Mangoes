
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const setStatic = Matter.Body

var position;
var boy,boyImage;
var ground;
var stone,slingShot;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;

function preload()
{
	boyImage = loadImage("boy.png");
	
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
	//Create the Bodies Here.
	ground = new Ground(600,height,1400,20);
	boy = createSprite(190,525,50,80)
	boy.addImage(boyImage)
	boy.scale = 0.1;
	stone = new Stone(235,420,30)
	slingShot = new Slingshot(stone.body,{x:135,y:460});
	tree = new Tree(1000,300,300,300);
	tree.scale = 0;
	mango1 = new Mango(800,170,30);
	mango2 = new Mango(1000,180,30);
	mango3 = new Mango(1200,160,45);
	mango4 = new Mango(900,160,20);
	mango5 = new Mango(1000,90,40);
	mango6 = new Mango(800,250,30);
	mango7 = new Mango(1000,250,30)
	mango8 = new Mango(1100,250,35);

}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  textSize(20);
  fill("cyan");
  text("Press space to get second chance!!",100,20);
  tree.depth = stone.depth+1
  drawSprites();
  boy.display();
  ground.display();
  stone.display();
  slingShot.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
 
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	slingShot.fly();
	
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(stone.body);
    }
}

function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }



