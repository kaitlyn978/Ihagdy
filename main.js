//https://teachablemachine.withgoogle.com/models/lx3ctFCq_/
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio: true });
    console.log('ml5 version:',ml5.version);
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lx3ctFCq_/',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log('got Results!!')
}