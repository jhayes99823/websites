
var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        determineSound(this.innerHTML);
        animateButton(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    determineSound(event.key);
    animateButton(event.key);
});

function determineSound(key) {
    var audio; 
        switch(key){
            case "w":
                audio = new Audio("sounds/crash.mp3");
                break;
            case "a":
                audio = new Audio("sounds/kick-bass.mp3");
                break;
            case "s":
                audio = new Audio("sounds/snare.mp3");
                break;
            case "d":
                audio = new Audio("sounds/tom-3.mp3");
                break;
            case "j":
                audio = new Audio("sounds/tom-1.mp3");
                break;
            case "k":
                audio = new Audio("sounds/tom-2.mp3");
                break;
            case "l":
                audio = new Audio("sounds/tom-4.mp3");
                break;
            default:
                break;
        }
        audio.play();
}

function animateButton(key) {
   var activeBtn = document.querySelector("." + key)
   activeBtn.classList.add("pressed");
   
   setTimeout(function() {
       activeBtn.classList.remove("pressed")
   }, 150);
}