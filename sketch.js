var canvas;
var music;
var ball;
var box1, box2, box3, box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);


    //create 4 different surfaces
    box1= createSprite(0,750,150,50);
    shapeColor = "purple";
     
    box2= createSprite(150,750,150,50);
    shapeColor = "red";

    box3= createSprite(300,750,150,50);
    shapeColor = "blue";

    box4= createSprite(450,750,150,50);
    shapeColor = "pink";



    //create ball sprite and give velocity
    ball = createSprite(400,70,50,50);
    ball.velovityX = 4;
    ball.velovityY = -4;

}

function draw() {
    background(rgb(169,169,169));
   
    //create edgeSprite
    createEdgeSprites();
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    
    if(box1.isTouching(ball) && ball.bounceOff(box1)){
    ball.shapeColor = "purple";
    }

    if(box2.isTouching(ball)){
        ball.shapeColor ="red";
        ball.velocity =0;
        
    }

    if(box3.isTouching(ball) && ball.bounceOff(box3)){
    ball.shapeColor = "blue";
    }

    if(box4.isTouching(ball) && ball.bounceOff(box4)){
    ball.shapeColor = "pink";
    }
    drawSprite();
}
