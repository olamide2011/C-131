function preload() {
    img=loadImage("dog_cat.jpg")
}


function setup() {
    canvas=createCanvas(600,400);
    canvas.center();
    obejectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : detecting objects";
}

function modelLoaded() {
    console.log("modelIsLoaded");
    objectDetector.detect(img,gotResult);
}

function draw() {
    image(img,0,0,600,400);
}

