const dino = document.getElementById("dino");
const rock = document.getElementById("rock");


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

setInterval(() => {
  
  const dinoTop = parseInt(window.getComputedStyle(dino)
    .getPropertyValue('top'));

  const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue('left'));
  

  if (rockLeft < 0) {
    rock.style.display = 'none';

  } else {
    rock.style.display = ''
  }

  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {

    alert("GameOver!" + "\n\nPlay again?");
    location.reload();
  } 
}, 50);

