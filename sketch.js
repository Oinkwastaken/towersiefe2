const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var score=0

function setup() {
  createCanvas(1300,900);
  engine = Engine.create();
  world = engine.world;
  background=createSprite(650,450,1300,900)
  box1=new box(560,275,30,30)
  box2=new box(590,275,30,30)
  box3 = new box(620, 275, 30, 30);
  box4=new box(650,275,30,30)
  box5=new box(680,275,30,30)
  box6=new box(710,275,30,30)
  box7=new box(740,275,30,30)
  box8=new box(590,235,30,30)
  box9=new box(620,235,30,30)
  box10=new box(650,235,30,30)
  box11=new box(680,235,30,30)
  box12=new box(710,235,30,30)
  box13=new box(620,195,30,30)
  box14=new box(650,195,30,30)
  box15=new box(680,195,30,30)
  box16=new box(650,155,30,30)
  polygon1 =new polygon(50,200,40,40)
  ground1=new ground(650,285,210,20)
  ground3=new ground(650,0,1300,20)
  ground4=new ground(0,450,20,90000)
  ground5=new ground(1400,450,220,900000)
  slingshot=new Slingshot(polygon1.body,{x:200,y:200})
}

function draw() {
  Engine.update(engine)
  rectMode(CENTER)
  drawSprites()
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display()
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  slingshot.display();
  polygon1.display();
  ground1.display();
  ground3.display();
  ground4.display();
  ground5.display();
  fill("white")
  textSize(50)
  text("Score:" + score,900,50)
  console.log(score)
  if(box1.body.position.y>285 || box2.body.position.y>285 || box3.body.position.y>285 || box4.body.position.y>285 || box5.body.position.y>285 || box6.body.position.y>285 || box7.body.position.y>285 || box8.body.position.y>285 || box9.body.position.y>285 || box10.body.position.y>285 || box11.body.position.y>285 || box12.body.position.y>285 || box13.body.position.y>285 || box14.body.position.y>285 || box15.body.position.y>285 || box16.body.position.y>285){
   
if(box1.body.position.y<335 || box2.body.position.y<335 || box3.body.position.y<335 || box4.body.position.y<335 || box5.body.position.y<335 || box6.body.position.y<335 || box7.body.position.y<335 || box8.body.position.y<335 || box9.body.position.y<335 || box10.body.position.y<335 || box11.body.position.y<335 || box12.body.position.y<335 || box13.body.position.y<335 || box14.body.position.y<335 || box15.body.position.y<335 || box16.body.position.y<335){
    score++
} 
  }
}

function mouseDragged(){  
    Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
	Matter.Body.applyForce(polygon1.body,polygon1.body.position,{x:50,y:1});

}