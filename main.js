mouthX=0;
mouthY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',getPoses)
}

function draw
{
    background('#969A97');
    document.getElementById("square_side").innerHTML = "width And Height of a square will be +" + difference +"px");
    Fill('#F90093');
    stroke('#f90093');
    square(mouthX,mouthY,difference);
}

function modelLoaded()
{
    console.log('poseNet Is Initialized');
}

function getPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        mouthX = reasults[0].pose.mouth.x;
        mouthY = reasults[0].pose.mouth.y;
        console.log("mouthX =" + mouthY + "moutY =" + mouthY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor (leftWristX - rightWristX);

        console.log("leftWristX =" +leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);
    }
}

