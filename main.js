function preload()
{
    nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}
var noseX = 0;
var noseY = 0;

var lefteyeX =0;
var lefteyeY = 0;

var righteyeX = 0;
var righteyeY = 0;

function setup()
{
    var canvas = createCanvas(450,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 350);
    video.hide();

    var poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", getpose);

function getpose(results)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x ="+noseX+" nose y ="+noseY);

    lefteyeX = results[0].pose.leftEye.x;
    lefteyeY = results[0].pose.leftEye.y;

    righteyeX = results[0].pose.rightEye.x;
    righteyeY = results[0].pose.rightEye.y;
}
}
function draw()
{
   image(video, 0, 0, 450, 350);
   //image(nose, noseX - 20, noseY -15, 40, 40);
   fill("red");
   stroke(0,128,0);
   circle(noseX,noseY,30);
   fill("black");
   rect(lefteyeX - 20,lefteyeY - 10, 40, 20);
   rect(righteyeX -15,righteyeY -10, 40, 20);
}
function modelLoaded()
{
    console.log("posenet model is loaded");
}


function takesnapshot()
{
    save("snapshot(1).jpeg")
}