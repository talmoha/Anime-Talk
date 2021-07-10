function getBotResponse(input) {
    if (input=="hi") {
        document.getElementById("changing_gif").innerHTML='<div id="temp1_gif"><img class="card-img-top mb-5 mb-md-0" src=assets/gif/ohhey.gif></div>';
        var audio = document.getElementById("ohHey");
        audio.play();
        setTimeout(function() {  document.getElementById('temp1_gif').innerHTML='<img class="card-img-top mb-5 mb-md-0" src=assets/gif/onepunch.gif>'}, 3*1000);
    }
    else if (input=="what's your name?") {
        document.getElementById("changing_gif").innerHTML='<div id="temp2_gif"><img class="card-img-top mb-5 mb-md-0" src=assets/gif/mynameGIF.gif></div>';
        var audio = document.getElementById("myName");
        audio.play();
        setTimeout(function() {  document.getElementById('temp2_gif').innerHTML='<img class="card-img-top mb-5 mb-md-0" src=assets/gif/onepunch.gif>'}, 2*1000);
    }
    else if (input=="nice to meet you") {
        document.getElementById("changing_gif").innerHTML='<div id="temp3_gif"><img class="card-img-top mb-5 mb-md-0" src=assets/gif/nicetomeetuGIF.gif></div>';
        var audio = document.getElementById("niceToMeetYou");
        audio.play();
        setTimeout(function() {  document.getElementById('temp3_gif').innerHTML='<img class="card-img-top mb-5 mb-md-0" src=assets/gif/onepunch.gif>'}, 2.25*1000);
    }
    else if (input=="tell me about yourself") {
        document.getElementById("changing_gif").innerHTML='<div id="temp4_gif"><img class="card-img-top mb-5 mb-md-0" src=assets/gif/justaguyGIF.gif></div>';
        var audio = document.getElementById("justaGuy");
        audio.play();
        setTimeout(function() {  document.getElementById('temp4_gif').innerHTML='<img class="card-img-top mb-5 mb-md-0" src=assets/gif/onepunch.gif>'}, 3*1000);
    }
    else if (input=="what is your super power?") {
        document.getElementById("changing_gif").innerHTML='<div id="temp5_gif"><img class="card-img-top mb-5 mb-md-0" src=assets/gif/allineedGIF.gif></div>';
        var audio = document.getElementById("alliNeed");
        audio.play();
        setTimeout(function() {  document.getElementById('temp5_gif').innerHTML='<img class="card-img-top mb-5 mb-md-0" src=assets/gif/onepunch.gif>'}, 2.3*1000);
    }
}