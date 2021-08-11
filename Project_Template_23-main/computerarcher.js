class ComputerArcher{

constructor(a,b,c,d){

var options = {

isStatic: true
}

this.x = a;
this.y = b;
this.width = c;
this.height = d;

this.body = Bodies.rectangle(a, b, c, d, options)
this.image = loadImage("assets/computerArcher.png")
World.add(world, this.body)
Matter.Body.setAngle(this.body, PI/2)
}

display(){
var angle = this.body.angle
var pos = this.body.position
push()
translate(pos.x, pos.y)
rotate(angle)
imageMode(CENTER)
image(this.image,0,0,this.width,this.height)
pop()
}
}