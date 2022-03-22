var bird,birdImg

var backgroundSprite
var airplane,airplaneImg
function preload(){
  bird1Img=loadAnimation("Images/blue bird1.png","Images/blue bird2.png","Images/blue bird 3.png","Images/blue bird4.png","Images/blue bird5.png","Images/blue bird6.png","Images/blue bird7.png","Images/blue bird8.png")
  bird2Img=loadAnimation("Images/b bird1.png","Images/b bird2.png","Images/b bird3.png","Images/b bird4.png","Images/b bird5.png","Images/b bird6.png","Images/b bird7.png","Images/b bird8.png")
  bird3Img=loadAnimation("Images/brown bird1.png","Images/brown bird2.png","Images/brown bird3.png","Images/brown bird4.png","Images/brown bird5.png","Images/brown bird6.png")
  bird4Img=loadAnimation("Images/purple bird1.png","Images/purple bird2.png","Images/purple bird3.png","Images/purple bird4.png","Images/purple bird5.png")
 
  airplaneImg=loadImage("airplane.png")
  cloudsImg=loadImage("clouds.png")
  coinImg=loadImage("coin.png")
  fueltankImg=loadImage("fuelTank.png")
  backgroundImg = loadImage("background.jpg") 
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
backgroundSprite = createSprite(windowWidth/2,windowHeight/2)
backgroundSprite.addImage("backgroundSprite", backgroundImg)
backgroundSprite.scale = 2
  
airplane=createSprite(windowWidth-200,300)
airplane.addImage("airplaneImg",airplaneImg)
airplane.scale=0.7
backgroundSprite.velocityX = 4

}

function draw() {
  background(backgroundImg); 


if(backgroundSprite.x>windowWidth)
{
  backgroundSprite.x = 0
}

  
  makeClouds()
  makeBirds()
drawSprites();

}
function makeBirds()
{
  if(frameCount%100 === 0)
  {
    bird = createSprite(0,100)
    bird.y = Math.round(random(100,windowHeight- 100))
    var rand = Math.round(random(1,4))
    bird.velocityX = 3
    if(rand == 1)
    {
      bird.addAnimation("bird1", bird1Img)
      bird.scale=0.7
    }
    if(rand == 2)
    {
      bird.addAnimation("bird2", bird2Img)
      bird.scale = 0.5
    }
    if(rand == 3)
    {
      bird.addAnimation("bird3", bird3Img)
      bird.scale = 0.5
    }
    if(rand == 4)
    {
      bird.addAnimation("bird4", bird4Img)
      bird.scale=0.5
    }
  }
}
function makeClouds(){
  if(frameCount%100 ===0)
  {
    cloud=createSprite(0,100)
    cloud.y=Math.round(random(100,windowHeight-100))
    cloud.velocityX=5
    cloud.addImage("cloudImg",cloudsImg)
    cloud.scale=0.3
  }
}