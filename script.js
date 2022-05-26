const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
let score = document.getElementById("score");
 let count = Number(score.textContent)

function jump() {

  dino.classList.add("jump-animation");
  
  setTimeout(function () {
    dino.classList.remove("jump-animation"); 
  }, 450);
  
}

document.addEventListener("keypress", function (event) {
  if(dino.classList != "jump-animation") {
  
    jump();

  }
})

setInterval(function () {
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
console.log(dinoTop)

const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
console.log(rockLeft)

if(rockLeft < 0) {
    rock.style.display = "none";
} else {
    rock.style.display = '';
}



if(rockLeft < 50 && rockLeft > 0 && dinoTop > 335 ) {
  alert("gameover");
  reload();
}
}, 50);
