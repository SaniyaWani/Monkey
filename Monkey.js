class Monkey {
    constructor(x,y,width,height)
    {
        var options = {
            'isStatic':true
        }
        this.image=loadImage("sprite_2.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display()
    {

         var position=this.body.position;
        imageMode(CENTER);
       image(this.image,position.x,position.y,60,60);


    }
    
}