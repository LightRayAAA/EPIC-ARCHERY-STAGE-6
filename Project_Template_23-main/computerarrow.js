class ComputerArrow{

    constructor(a,b,c,d,archerAngle){
    
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
    push()
    translate(pos.x, pos.y)
    imageMode(CENTER)
    image(this.image, 0, 0, this.width, this.height)
    pop()
    }
    }