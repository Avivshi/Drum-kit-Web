//Button press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var btnInnerHtml = this.innerHTML;
    playSound(btnInnerHtml);
    btnAnimation(btnInnerHtml);
  });
}

//Keyboard press
document.addEventListener("keydown", function(event) {
  playSound(event.key);
  btnAnimation(event.key);
});

function playSound(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "a":
      audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "s":
      audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "d":
      audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case "j":
      audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case "k":
      audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case "l":
      audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;


    default:
      console.log(btnInnerHtml);
  }
}

function btnAnimation(key){

  var activeBtn = document.querySelector("." + key);
  activeBtn.classList.add("pressed");

  setTimeout(function() {
    activeBtn.classList.remove("pressed");
  }, 100);
}
