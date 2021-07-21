var path, boy
var leftboundary, rightboundary
var pathimg, boyimg

function preload() {
  //pre-load images
  pathimg = loadImage("path.png")
  boyimg = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup() {
  createCanvas(400, 400);
  //for moving background
  path=createSprite(200,200)
  path.addImage(pathimg)
  path.scale=1.2

  //create sprites here
  //boy sprite
  boy=createSprite(120,310,30,30)
  boy.addAnimation("running",boyimg)
  boy.scale=0.1

  //right boundary
  rightboundary=createSprite(400,0,100,800)
  rightboundary.visible=false

  //left boundary
  leftboundary=createSprite(0,0,100,800)
  leftboundary.visible=false
  
  edges=createEdgeSprites()
}

function draw() {
  background(0);
  path.velocityY=4

  //boy moving on x axis
  boy.X= World.mouseX

     boy.collide(edges[3])
     boy.collide(leftboundary)
     boy.collide(rightboundary)

     //to rest background
     if(path.y > 400){
       path.y=height/2
     }

     drawSprites()
    }
