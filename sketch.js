const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score,game_state



function preload() {
}

function setup(){
    createCanvas(1600,800);
    engine = Engine.create();

    world = engine.world;
    ground2 = new Ground(1400,400,100,10);
    ground1 = new Ground(1400,790,100,20);
    ground3 = new Ground(300,577,100,20)

    box1 = new Box(1400,375,90,50);
    box2 = new Box(1400,765,90,50);

    object1 = new Circle2(950,400,10,10);
    

    slingshot = new SlingShot(object1.body,{x:300, y:400});

    score = 0

    
}

function draw(){
    background("blue");
    
    Engine.update(engine);

    object1.display();
    slingshot.display();
    ground1.display();
    ground2.display();
    ground3.display();
    box1.display();
    box2.display();
    fill("white");
    textSize(28);
    text("click space to bring back ball",100,20);
    //fill("white");
    //textSize(28);
    //text("SCORE: "+score,1300,20);
    
}

function mouseDragged(){
    Matter.Body.setPosition(object1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        
        slingshot.attach(object1.body);
        
    }
    
}