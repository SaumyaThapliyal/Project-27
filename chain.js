class Chain{
    constructor(body1, point){
        var option = {
            bodyA:body1,
            pointB:point,
            stiffness:0.04,
            length:250
        }
         this.pointB = point;
        this.chain = Constraint.create(option);

        World.add(world,this.chain)
    }



    display(){
        var posA= this.chain.bodyA.position;
        var posB= this.pointB;
        strokeWeight(6);
        stroke("white");
        line(posA.x,posA.y,posB.x,posB.y);

            
    }
}