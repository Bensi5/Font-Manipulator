leftWristX=0;
rightWrist=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,400);
    canvas.position(560,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",getposes);
}

function draw(){
background("#ffff4f");
textSize(difference);
fill("black");
text("Bensitha",100,100);
}

function modelLoaded(){
    console.log("PoseNet is loaded");
}

function getposes(results){
    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWrist);
    }
}