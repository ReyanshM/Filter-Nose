/*var Canvas=document.createElement('canvas');
Canvas.width=800;
Canvas.height=600;
Canvas.style.backgroundColor="black";
console.log(Canvas);
document.body.appendChild(Canvas);*/var video;
function setup(){
    var canvas=createCanvas(370,320);
    background(0);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(370,320);
    video.hide();
}
function draw(){
    x=0;
    y=0;
    image(video,0,0,370,320);
    image(clown_nose,x,y,30,30);
}
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
posenet=ml5.poseNet(video,ini);
function ini(){
    console.log("Initialized");
}
posenet.on('pose',getposes)
function getposes(results){
    console.log(results.length);
}