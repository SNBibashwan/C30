class Box {
  constructor(x,y)
  {
    var options ={
      'restitution': 0.8,
      'friction': 0.8
    }
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height = 50;
    this.Visiblity = 255;

    World.add(world,this.body);
  }
  display()
  {
    var angle = this.body.angle;
    var pos =this.body.position;
    if(this.body.speed < 3){
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill('aquamarine');
  
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity -= 10;
      tint(255,this.Visiblity);
      pop();
    }

  }


  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }
}















/*
class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    
      
    }
  
  };
  


  */