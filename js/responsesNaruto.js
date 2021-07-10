function getBotResponse(input) {
    if (input=="hey") {
        document.getElementById("changing_gif").innerHTML='<div id="temp1_gif"><img class="card-img-top mb-5 mb-md-0" src=assets/gif/heynarutoGIF.gif></div>';
        var audio = document.getElementById("hey");
        audio.play();
        setTimeout(function() {  document.getElementById('temp1_gif').innerHTML='<img class="card-img-top mb-5 mb-md-0" src=assets/gif/naruto.gif>'}, 0.4*1000);
    }
    else if (input=="what's your dream?") {
        document.getElementById("changing_gif").innerHTML='<div id="temp2_gif"><img class="card-img-top mb-5 mb-md-0" src=assets/gif/mydreamGIF.gif></div>';
        var audio = document.getElementById("dream");
        audio.play();
        setTimeout(function() {  document.getElementById('temp2_gif').innerHTML='<img class="card-img-top mb-5 mb-md-0" src=assets/gif/naruto.gif>'}, 1.8*1000);
    }
    else if (input=="can I tell you a joke?") {
        document.getElementById("changing_gif").innerHTML='<div id="temp3_gif"><img class="card-img-top mb-5 mb-md-0" src=assets/gif/sure.gif></div>';
        var audio = document.getElementById("sure");
        audio.play();
        setTimeout(function() {  document.getElementById('temp3_gif').innerHTML='<img class="card-img-top mb-5 mb-md-0" src=assets/gif/naruto.gif>'}, 1.5*1000);
    }
    else if (input=="nobody knows") {
        document.getElementById("changing_gif").innerHTML='<div id="temp4_gif"><img class="card-img-top mb-5 mb-md-0" src=assets/gif/isee.gif></div>';
                var audio = document.getElementById("iSee");
                audio.play();
                setTimeout(function() {  document.getElementById('temp4_gif').innerHTML='<img class="card-img-top mb-5 mb-md-0" src=assets/gif/naruto.gif>'}, 1.5*1000);
    }
}