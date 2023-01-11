var song = document.getElementById("song");
var icon = document.getElementById("icon");
icon.onclick =function(){
    // song.play();
    if(song.paused){
        song.play();
        icon.src = "image&video/pause.webp"
    }
    else{
        song.pause();
        icon.src = "image&video/play.webp"

    }
}