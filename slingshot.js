class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 5
        }
        this.holder = loadImage('images/holder.png');
        this.catapult = loadImage('images/catapult1.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.catapult,170,290,300,300);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("grey");
                strokeWeight(4);
                line(pointA.x - 25, pointA.y+10, pointB.x +10, pointB.y);
                line(pointA.x - 25, pointA.y, pointB.x + 10, pointB.y - 1);
                image(this.holder,pointA.x - 85, pointA.y -60,200,260);
            
            pop();
        }
    }
    
}