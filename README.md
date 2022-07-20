# convert_audio_into_text

to build a web page that convert audio into text we need to create two files 

the first one is the index.html file 
which contain the following code 


<!DOCTYPE html>
<html lang="ar"> 
    <head>
        <meta charset="UTF-8">
        <title>convert your voice into a text </title>
        <!-- here put the css code or a link -->
    </head>
    <style>
        body{
	font-family: arial;
	font-size: 16px;
	margin: 0;
	background:linear-gradient(to right bottom, #f9568f, #031f6a);
	color: #000;
	
	display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
        button{
	    padding: 12px 20px;
        background: #0ea4da;
        border: 0;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        border-radius: 5px;
    }

    </style>
    <body>
        <div class ="container"> 
            <h1 class="text-center mt-5"> 
                let's convert your voice into a text 
            </h1>
            <p id="insturction"> please press the button to start recording and convert your voice into a text </p>
            <div class="form-group">
                <button id="start-btn" class="button.btn.btn-danger btn-block">
                    start 
                </button>
                    
            </div>
            <div class="form-group">
                <textarea  id="textbox"  rows="6" class="form"></textarea> 
            </div>
        </div>
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="script.js"> </script>
</html> 


and the second one will be the script.js file 
which contain the following code 

var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

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

to get this as a result 

![Screenshot (621)](https://user-images.githubusercontent.com/108210044/179873265-ecf15eff-161d-4f60-8d29-2b147e39a300.png)
