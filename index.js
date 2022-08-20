var limit = document.querySelectorAll(".drum").length;

// Sound when clicked by mouse 
for(var i = 0; i< limit ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        var buttonPressed = this.innerHTML;
        // alert(buttonPres);
        makeSound(buttonPressed);
        buttonAnimation(buttonPressed);
        
        
    })
}


// Sound when keyboard key got pressed 
document.addEventListener("keydown" , function(Event){
    // alert(Event.key);
    makeSound(Event.key.toLowerCase());
    buttonAnimation(Event.key.toLowerCase());
});


// Drum Sound
function makeSound(value){
    switch(value){
        case "w":
            var carsh = new Audio("./sounds/crash.mp3");
            carsh.play();
            break;

        case "a":
            var carsh = new Audio("./sounds/kick-bass.mp3");
            carsh.play();
            break;

        case "s":
            var carsh = new Audio("./sounds/snare.mp3");
            carsh.play();
            break;
            
        case "d":
            var carsh = new Audio("./sounds/tom-1.mp3");
            carsh.play();
            break;
        
        case "j":
            var carsh = new Audio("./sounds/tom-2.mp3");
            carsh.play();
            break;

        case "k":
            var carsh = new Audio("./sounds/tom-3.mp3");
            carsh.play();
            break;

        case "l":
            var carsh = new Audio("./sounds/tom-4.mp3");
            carsh.play();
            break;

        default: console.log(value);
    }
}

// Animation for button when pressed ----- note: animation coming from the CSS .pressed style
function buttonAnimation(curentKey){
    var activeButton = document.querySelector("."+curentKey); // get .w or .s or .a from the html class= ".w"
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 100);
}