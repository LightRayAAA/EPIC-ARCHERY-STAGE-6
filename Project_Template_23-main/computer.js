class ComputerPlayer{

    constructor(a,b,c,d){

    var  options = {
    
    isStatic: true,
    restitution: 0,
    friction: 0,
    density: 0
    }
    
    this.x = a;
    this.y = b;
    this.width = c;
    this.height = d;
    
    this.body = Bodies.rectangle(a, b, c, d, options)
    this.image = loadImage("assets/player.png")
    this.life1 = "green"
    this.life2 = "green"
    this.life3 = "green"
    World.add(world, this.body)
    }
    
    life(){
    push()
    textSize(20)
    fill("white")
    text("Computer", width-310, 40)
    fill(this.life1)
    rect(width-420,50,70,30)
    fill(this.life2)
    rect(width-340,50,70,30)
    fill(this.life3)
    rect(width-260,50,70,30)
    pop()
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