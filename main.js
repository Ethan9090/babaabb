status = "";
coco = [];

function preload(){
}

function setup(){
    canvas = createCanvas(500,350);
    canvas.center();

    camera = createCapture(VIDEO);
    camera.size(500,350);
    camera.hide();

    modeL = ml5.objectDetector("cocossd",modelLoaded);
    
}

function modelLoaded(){
    console.log("mymdoelisready");
    status = "yes";
}

function gotResult(error, results){
    if (error){
    console.log(error);
 }
    console.log(results); 
    coco = results;
}

function draw(){
    
    image(camera,0,0,500,350);
        
    if(status != ""){
    modeL.detect(camera,gotResult);


    for(i=0; i < coco.length; i++){

            if(coco[i].label = "person"){
                document.getElementById("objectnumbers").innerHTML = "there is somone";
            }
            else{
                document.getElementById("objectnumbers").innerHTML = "there should be a song playing but i dint get any song links so i cant use it but this will probably came up because there is no person and i gues the best i can do is i gues where this line is it would say songnamevarible.play() and it would be doing somthing i guess";
            }

        }
    }
}