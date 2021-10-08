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
}

function modelLoaded(){
    console.log("PoseNet is loaded");
}

function getposes(results){
    if(results.length > 0){
        console.log(results);
    }
}