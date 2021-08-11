class PlayerArrow{

    constructor(a,b,c,d){
    
    var  options = {
    
    isStatic: true,
    restitution: 0.8,
    friction: 1,
    density: 1
    }
    
    this.x = a;
    this.y = b;
    this.width = c;
    this.height = d;
    this.trajectory = []

    this.isRemoved = false

    this.body = Bodies.rectangle(a, b, c, d, options)
    this.image = loadImage("assets/arrow.png")
    World.add(world, this.body)
    }
    
    remove(index,arrow){
    this.isRemoved = true
    Matter.World.remove(world, this.body)
    arrow.splice(index,1)
    }

    shoot(archerAngle){
    var velocity = p5.Vector.fromAngle(archerAngle)
    velocity.mult(20)
    Matter.Body.setStatic(this.body, false)
    Matter.Body.setVelocity(this.body, {x:velocity.x, y:velocity.y})
    }

    reduceLife(archerLife){
    if(archerLife == 2){
    this.life1 = "yellow"
    }
    if(archerLife == 1){
    this.life2 = "red"
    }
    if(archerLife == 0){
    this.life3 = "black"
    }
    }
    
    display(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
    translate(pos.x, pos.y)
    imageMode(CENTER)
    image(this.image, 0, 0, this.width, this.height)
    pop()
    if(this.body.velocity.x > 0 && this.body.position.x > 400){
    var position = [this.body.position.x, this.body.position.y]
    this.trajectory.push(position)
    }
    for(var I = 0; I < this.trajectory.length; I++){
    fill("white")
    ellipse(this.trajectory[I][0], this.trajectory[I][I], 5, 5)
    }
    }
    }