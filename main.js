function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qvYEqTSpj/model.json",modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        randomNumber_r=Math.floor(Math.random() * 255);
        randomNumber_g=Math.floor(Math.random() * 255);
        randomNumber_b=Math.floor(Math.random() * 255);
    
        document.getElementById("resultLabel").innerHTML="Detected voice - "+ results[0].label;
       
        document.getElementById("resultLabel").style.color="rgb("+ randomNumber_r+ ","+ randomNumber_g+ ","+ randomNumber_b+ ")";
       
    
        img1=document.getElementById("animalImage");
        
    
        if(results[0].label == "Barking"){
            img1.src="barking.gif";
        }
        else if(results[0].label == "Mooing"){
            img1.src="cow.gif";
        }
        else if(results[0].label == "Meowing"){
            img1.src="meowing.gif";
        }

        else if(results[0].label == "Roaring"){
            img1.src="roaring.gif";
        }

        else if(results[0].label == "Whale sounds"){
            img1.src="whalesounds.gif";
        }
       
    }
    }