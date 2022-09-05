Status="";
object="";

function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();

}

function draw(){
image(video,0,0,400,400);
if(Status !=""){
    objectDetector.detect(video,gotResult);
        }
    for(i=0; i<object.length; i++){
    document.getElementById("status").innerHTML="Status = object detected";
    document.getElementById("number_of_objects")=innerHTML="The number of objects detected are"+object.length;
    
    fill("#00FFFF");
    percent = floor(object[i].confidence*100);
    text(object[i].label+""+percent+"%".object[i].x,object[i].y);
    noFill();
    stroke("purple");
    rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
if(object[i].label==input){
video=webcamLiveView.stop();
objectDetector.detect(gotResult);
document.getElementById("status").innerHTML= input +" found";
}
}


function start(){
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="status: detecting object";
    input= document.getElementById("inputobject").value;
    }


    function modelloaded(){
        console.log("model has been loaded");
        Status=true;
        }

        function gotResult(error,results){
            if(error){
            console.error(error);
            
            }
            console.log(results);
            object=results;
            }