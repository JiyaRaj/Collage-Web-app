var SpeechRecognition= window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();
 
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });


function save() {
    Recognition.start();

}

Recognition.onresult=  function(event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    speak();
    Webcam.attach( '#webcam' );
}

function speak(){
    var synth= window.speechSynthesis;
    var speak_data= document.getElementById("textbox").innerHTML;
    var speak_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(speak_this);

}