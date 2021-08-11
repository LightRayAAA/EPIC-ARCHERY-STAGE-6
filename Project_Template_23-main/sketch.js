const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player1, playerbase
var computer1, computerbase
var computerarcher, playerarcher
var computerarrow = []
var arrow
var playerarrow = []
var BGIMG
var playerlife = 3
var computerlife = 3

function preload() {
BGIMG = loadImage("assets/background.gif")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
player1 = new Player(300, 230, 100, 200)
playerbase = new PlayerBase(300, 400, 200, 200)
computer1 = new ComputerPlayer(1000, 230, 100, 200)
computerbase = new ComputerBase(1000, 400, 200, 200)
computerarcher = new ComputerArcher(width - 340,computerbase.body.position.y-180,120,120)
playerarcher = new PlayerArcher(340,playerbase.body.position.y-180,120,120)

//arrow = new PlayerArrow(playerarcher.body.position.x,playerarcher.body.position.y,100,10)



 }

function draw() {

  background(BGIMG);

  Engine.update(engine);
  player1.display();
  playerbase.display();
  computer1.display();
  computerbase.display();
  computerarcher.display();
  computer1.life();
  player1.life();
  playerarcher.display();
  //arrow.display();
  for(var  I = 0; I < playerarrow.length; I++){
  shootArrows(I, playerarrow);
  }
  
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


}

function keyReleased(){
if(keyCode==32){
if(playerarrow.length){
var angle = playerarcher.body.angle + PI/2
playerarrow[playerarrow.length - 1].shoot(angle)
}
}
}

function keyPressed(){
if(keyCode==32){
var posX = playerarcher.body.position.x
var posY = playerarcher.body.position.y
var angle = playerarcher.body.angle + PI/2
var arrow = new PlayerArrow(posX, posY, 100, 10)
playerarrow.push(arrow)
}
}

function shootArrows(index, arrow){
arrow[index].display()
}

function handleComputerArcher(){
if(!computerarcher.collapse && !playerarcher.collapse)
{
setTimeout(() =>
{
var pos = computerarcher.body.position
var angle = computerarcher.body.angle
var moves = ("UP", "DOWN")
var move = random(moves)
var angleValue
if(move == "UP"){
angleValue = 0.1
}
else{
angleValue = -0.1
}
angle = angle + angleValue
var arrow = new ComputerArrow(pos.x, pos.y, 100, 10, angle)
Matter.body.setAngle(computerarcher.body, angle)
computerarrow.push(arrow)
setTimeout(() =>{
computerarrow[computerarrow.length - 1].shoot(angle)
},100)
handleComputerArcher();
},2000)
}
}

function handlePlayerArrowCollision(){
for (var I = 0; I < handlePlayerArrowCollision.length; I++){
var baseCollision = Matter.shootArrows.collides(
playerarrow[I].body,
computerbase.body
);

var archerCollision = Matter.shootArrows.collides(
playerarrow[I].body,
computerarcher.body
);

var computerCollision = Matter.shootArrows.collides(
playerarrow[I].body,
computer1.body
);

if(
baseCollision.collided ||
archerCollision.collided ||
computerCollision.collided

){
console.log("player arrow collided");
}
}
}
function handleComputerArrowCollision(){
  for (var I = 0; I < handlePlayerArrowCollision.length; I++){
  var baseCollision = Matter.shootArrows.collides(
  computerarrow[I].body,
  playerbase.body
  );
  
  var archerCollision = Matter.shootArrows.collides(
  computerarrow[I].body,
  playerarcher.body
  );
  
  var playerCollision = Matter.shootArrows.collides(
  computerarrow[I].body,
  player1.body
  );
  
  if(
  baseCollision.collided ||
  archerCollision.collided ||
  playerCollision.collided
  
  ){
  console.log("player arrow collided");
  }
  }
}