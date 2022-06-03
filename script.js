const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");
let over = document.querySelector("#game-over");


let isGameOver = false
// function for game start
function gameStart() {
    // over.style.display = 'none' ;
    jump();
}


function jump() {

  dino.classList.add("jump-animation");
  
  setTimeout(function () {
    dino.classList.remove("jump-animation"); 
  }, 450);
  
}

  document.addEventListener("keypress", function (event) {
  if(dino.classList != "jump-animation") {
t  
    jump();

  }

})

  let game = setInterval(() => {
    score.innerText++;

  
  const dinoTop = parseInt(window.getComputedStyle(dino)
    .getPropertyValue('top'));

  const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue('left'));
  

  if (rockLeft < 0) {
    rock.style.display = 'none';

  } else {
    rock.style.display = ''

}
// hit detection
  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
    // clearInterval()
    // rockLeft.style.animationPlayState = "paused"
    // rock.pause()
      while(!isGameOver) {
        gameOver();
        isGameOver = true
      }
    
    }
 } , 100);


 function gameOver() {
    //  over.style.display = 'block';
    let textOver = document.createElement("p")
    textOver.textContent = "gameover"
    //  let IsGameOver = true
    over.appendChild(textOver)
    let rock = document.getElementsByClassName("rock")
    rock[0].remove()
   clearInterval(game)
 }
