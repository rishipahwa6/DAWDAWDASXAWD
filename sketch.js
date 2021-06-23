var bg,bg2,form,system,code,security,treasure;
var score=0;
var sound,soundMAIN;
function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  treasure = loadImage("aladdin_cave2.jpg");
   sound = loadSound("Kabir Singh - Wada Wau.mp3");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  

  if(score === 3) {
    clear()
    background(treasure)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
     soundMAIN.loop();
  }

  drawSprites()
}