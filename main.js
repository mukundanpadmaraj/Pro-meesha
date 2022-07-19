noseX=0
noseY=0

function preload(){
    clown_nose= loadImage("https://i.postimg.cc/kgx2jXpn/pngtree-moustache-icon-cartoon-style-png-image-1959679.png")
}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    poseNet=ml5.poseNet(video, model_loaded)
    poseNet.on("pose", gotPoses)
}

function draw(){
    image(video, 0, 0, 300, 300)
    image(clown_nose, noseX, noseY, 60, 50)
}

function model_loaded(){
    console.log("pose net's initialised")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        console.log("The nose x-postion's "+results[0].pose.nose.x)
        console.log("The nose y-postion's "+results[0].pose.nose.y)
        noseX=results[0].pose.nose.x-30
        noseY=results[0].pose.nose.y-5
    }
}

function takeSnapshot(){
    save("clowny-noseyy.png")
}