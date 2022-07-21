var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()
 
recognition.lang="ar";

var textbox = $("#textbox")

var insturctions = $("#insturctions")
// empty 
var content = ''
// if the recording start then recognise the audio to convert it 
recognition.continuos = true 


recognition.onstart = function() {
    insturctions.text("voice recognition is on ")
}

// if there is no speech ant more the function will stop 
recognition.onspeechend = function() {
    insturctions.text("No Activity ")
}

// if an error occured an error message should appear 
recognition.onerror = function(){
    insturctions.text("try again")
}

//while recording the audio 
recognition.onresult = function (event) {
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript

    content += transcript 

    textbox.val(content)
}

//main function 
$("#start-btn").click(function(event){
    if (content.length){
        content+= ''
    }
    recognition.start() 

})
