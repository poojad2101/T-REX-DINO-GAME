const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");

function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() =>
    dino.classList.remove("jump-animation"), 450);
}


document.addEventListener("keypress", function (event) {
  
    jump();

  }
)

setInterval(() => {
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
console.log(dinoTop)

const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
console.log(rockLeft)

if(rockLeft < 0) {
    rock.style.display = "none";
} else {
    rock.style.display = '';
}
}, 50);


