lwx=0;
rwx=0;
d=0;

function setup () {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,400)
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log("poseNet is initalized!")  
}

function draw() {
    background("green");
    textSize(d);
    fill("red");
    text("Coder Addy",50,400);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        lwx=results[0].pose.leftWrist.x;
        rwx=results[0].pose.rightWrist.x;
        d=floor(lwx-rwx);
    }
}
