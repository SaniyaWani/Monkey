class Form{
    constructor(){
        this.start=createButton("play");
        this.rButton=createButton(">");
        this.lButton=createButton("<");
        this.jumpButton=createButton("jump");
    }
    display(){
        this.start.position(400,400);
        this.start.mousePressed(()=>{
        this.rButton.position(200,700);
        this.jumpButton.position(100,700);
        this.lButton.position(50,700);
           
            game.Play();
        })
    }
}