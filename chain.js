class Chain{
    constructor(bodyA,pointB){
        var setting = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.4,
            length : 100
        }
        this.pointB = pointB;
        this.chain = Constraint.create(setting);
        World.add(world, this.chain);
    }
    display(){
        if (this.chain.bodyA){ 
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
        fly(){
            this.chain.bodyA = null
        }
}