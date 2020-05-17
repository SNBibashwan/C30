class Player {
    constructor(x,y)
    {
      var options ={
        'restitution':0.2,
        'friction': 0.8,
        'density':0.8

      }
      this.body = Bodies.circle(x,y,25,options);
      this.x = x;
      this.y = y;
  
      World.add(world,this.body);
    }
    display()
    {
      var pos =this.body.position;
      fill('RED');
    
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,25,25);
    }
  }
  
  

  
  