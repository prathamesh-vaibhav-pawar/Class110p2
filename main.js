
 Predication_1 = ""
 Predication_2 = ""

 Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:100
 })
 Webcam.attach("#Camera")

 function CaptureImg(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id ='ImageCap' src ="+data_uri+">"
    })
}
Classify =ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5Mu8mWTqf/model.json",Model)
function Model(){
    console.log("Model loaded")
}
