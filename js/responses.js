function getBotResponse(input) {
    if (input=="hey") {
        document.getElementById("changing_gif").innerHTML='<div id="temp1_gif"><img class="card-img-top mb-5 mb-md-0" src=assets/gif/heyleviGIF3.gif></div>';
        var audio = document.getElementById("heyLevi");
        audio.play();
        setTimeout(function() {  document.getElementById('temp1_gif').innerHTML='<img class="card-img-top mb-5 mb-md-0" src=assets/gif/leviGIF.gif>'}, 1*1000);
    }
    else if (input=="how are you?") {
        document.getElementById("changing_gif").innerHTML='<div id="temp2_gif"><img class="card-img-top mb-5 mb-md-0" src=assets/gif/goodGIF.gif></div>';
        var audio = document.getElementById("goodLevi");
        audio.play();
        setTimeout(function() {  document.getElementById('temp2_gif').innerHTML='<img class="card-img-top mb-5 mb-md-0" src=assets/gif/leviGIF.gif>'}, 1*1000);
    }
    else if (input=="can you give me some advice?") {
        document.getElementById("changing_gif").innerHTML='<div id="temp3_gif"><img class="card-img-top mb-5 mb-md-0" src=assets/gif/calmdownGIF.gif></div>';
        var audio = document.getElementById("calmdownLevi");
        audio.play();
        setTimeout(function() {  document.getElementById('temp3_gif').innerHTML='<img class="card-img-top mb-5 mb-md-0" src=assets/gif/leviGIF.gif>'}, 2.25*1000);
    }
}