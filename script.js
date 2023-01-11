var song = document.getElementById("song");
var icon = document.getElementById("icon");
icon.onclick =function(){
    // song.play();
    if(song.paused){
        song.play();
        icon.src = "./pause.webp"
    }
    else{
        song.pause();
        icon.src = "./play.webp"

    }
}
