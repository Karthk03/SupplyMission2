class Crate
{
  constructor(x, y, height,angle) 
  {
    var options = 
    {
      'isStatic': true
    }
    this.body = Bodies.rectangle(x, y, 20, height, options);
    this.width = 20;
    this.height = height;

    World.add(world, this.body);

    Body.setAngle(this.body,angle-13);
  }
  
  display()
  {
    var pos =this.body.position;
    var angle = this.body.angle+13;
    push();
    
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);

    pop();
  }
}