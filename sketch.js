var garden;
var together;
var cat,cat1,cat2,cat3,cat4;
var mouse,mouse1,mouse2,mouse3,mouse4;


function preload() {
    //load the images here
    garden = loadImage("images/garden.png");
    cat1 = loadImage("images/cat1.png");
    cat2 = loadImage("images/cat2.png");
    cat3 = loadImage("images/cat3.png");
    cat4 = loadImage("images/cat4.png");
    mouse1 = loadImage("images/mouse1.png");
    mouse2 = loadImage("images/mouse2.png");
    mouse3 = loadImage("images/mouse3.png");
    mouse4 = loadImage("images/mouse4.png");
    

}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("catSleeping",cat1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouse1);
    mouse.scale = 0.15;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x - (catWidth - mouseWidth)/2)
    {
        cat.velocityX = 0;
        cat.addAnimation("catLastImg",cat3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("catLastImg");
        mouse.addAnimation("mouseLastImg",mouse3);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouseLastImg");
        
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   

  if(KeyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",cat2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseTeasing",mouse2);
    mouse.frameDelay = 25;
    cat.changeAnimation("mouseTeasing");
  }

}

