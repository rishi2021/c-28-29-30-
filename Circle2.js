class Circle2 {
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
          //isStatic: true

      }
      
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x, y, width , options);
   
      World.add(world, this.body);
    }
    display(){
      
      push();
      translate(this.body.position.x, this.body.position.y);
      ellipseMode(CENTER);
      fill("white");
      ellipse(0, 0,55, 55)
      console.log(this.body.position.x,this.body.position.y);
      pop();
    }
}