const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1,stand2;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;

var polygon,slingShot;
var polygon_img;

var gameState = "onSling";
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  

  ground = new Ground(450,390,900,20);
  stand1 = new Ground(380,290,300,10);
  stand2 = new Ground(700,200,300,10);
  
  block1 = new Block(280,235,30,40);
  block2 = new Block(310,235,30,40);
  block3 = new Block(340,235,30,40);
  block4 = new Block(370,235,30,40);
  block5 = new Block(400,235,30,40);
  block6 = new Block(430,235,30,40);
  block7 = new Block(460,235,30,40);

  block8 = new Block(310,195,30,40);
  block9 = new Block(340,195,30,40);
  block10 = new Block(370,195,30,40);
  block11 = new Block(400,195,30,40);
  block12 = new Block(430,195,30,40);

  block13 = new Block(340,155,30,40);
  block14 = new Block(370,155,30,40);
  block15 = new Block(400,155,30,40);
  
  block16 = new Block(370,110,30,40);

  block17 = new Block(600,145,30,40);
  block18 = new Block(630,145,30,40);
  block19 = new Block(660,145,30,40);
  block20 = new Block(690,145,30,40);
  block21 = new Block(720,145,30,40);

  block22 = new Block(630,90,30,40);
  block23 = new Block(660,90,30,40);
  block24 = new Block(690,90,30,40);

  block25 = new Block(660,45,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Slingshot(this.polygon,{x:100,y:200});
}

  function draw() {
    background("black"); 
    text(mouseX + ',' + mouseY, 10, 15);
    textSize(20)
        fill("white")
        text("Drag the polygon to destroy the blocks", 300, 40)

        textSize(12)
        fill("white")
        text("Press Space to get a second chance to play ", 650, 360)
    Engine.update(engine);
    
    ground.display();
    stand1.display();
    stand2.display();

    fill("lightblue")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("lightblue");
    block13.display();
    block14.display();
    block15.display();

    fill("grey");
    block16.display();

    fill("lightblue");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill("skyblue");
    block22.display();
    block23.display();
    block24.display();

    fill("pink");
    block25.display();

    imageMode(CENTER)
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

    slingShot.display();
  }
  
  //function mouseDragged(){
    //if (gameState!=="launched"){
    //Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  //}
  //}

  //function mouseReleased(){
    //slingShot.fly();
    //gameState = "launched";
  //}

//function keyPressed(){
  //  if(keyCode === 32){
  //      slingShot.attach(this.polygon);
  //  }
//}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon.body);
  }
}