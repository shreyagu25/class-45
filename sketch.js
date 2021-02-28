var road;
var score = 0;
var player1;
var tGroup;
function preload(){
  bgimg = loadImage("track.jpg");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  background = createSprite(width/2,height/2,width,height);
  //console.log(width);
  background.addImage(bgimg);
  background.velocityX = -5;
  background.scale = 0.9;
  player1 = createSprite(10,100,50,50)
  player1.shapeColor = "red";
  tGroup = new Group();
}

function draw() {
  //background(220);
  console.log(background.width);
  if(background.x<450){
    background.x = background.width/2;
  }
  //console.log(background.height);
  if(keyDown(UP_ARROW)){
    player1.y = player1.y-5;
  }
  if(keyDown(DOWN_ARROW)){
    player1.y = player1.y+5;
  }
  if(keyDown(LEFT_ARROW)){
    player1.x = player1.x-5;
  }
  if(keyDown(RIGHT_ARROW)){
    player1.x = player1.x+5;
  }
  for(var i = 0 ; i<tGroup.length;i++){
    if(tGroup.get(i).isTouching(player1)){
      tGroup.get(i).destroy();
      score = score + 1;
    }
  }
  
  treasures();
  drawSprites();
  textSize(35);
  fill("yellow");
  text("Score:"+ score,width/2,50);
}
function treasures(){
  if(frameCount % 50 === 0){
    var treasure = createSprite(width,Math.round(random(100,height-100)),30,30);
    treasure.velocityX = -3;
    treasure.shapeColor = "green";
    tGroup.add(treasure);
  }
 
}