class Rope{
    constructor(body1,body,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            bodyb:{x:this.offsetX,y:this.offsetY}
        }

        this.rope = Matter.constraint.create(options);
        World.add(world,this.rope);

    }
    display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X = position.x;
        var Anchor1Y = position.Y;

        var Anchor2X = point2.x + this.offsetX;
        var Anchor2x = point.y + this.offsetY;

        line(Anchor1x,Anchor1Y,Anchor2x,Anchor2Y);

    }

}