class Drop {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            friction: 0.3,
            restitution: 0.01,
            density: 1.2
        }
        this.radius = radius;        
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.rain = [];
    }
    display(){
        var position = [this.body.position.x, this.body.position.y];
        this.rain.push(position);
        var maxDrops = 100;

        if (pos.y > 800) {
            Matter.Body.setPosition(this.body,{x: Math.round(random(50,550)), y: Math.round(random(50,100))});
        }
        }
}