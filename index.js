
  var randomNo = Math.random();
  randomNo = Math.floor(randomNo*6 + 1);
 if(randomNo === 1){
   document.querySelector(".img1").setAttribute("src" , "images/dice1.png");
 }
  else if (randomNo === 2) {
    document.querySelector(".img1").setAttribute("src" , "images/dice2.png");
  }
  else if (randomNo === 3) {
    document.querySelector(".img1").setAttribute("src" , "images/dice3.png");
  }
  else if (randomNo === 4){
    document.querySelector(".img1").setAttribute("src" , "images/dice4.png");
  }
  else if (randomNo === 5){
    document.querySelector(".img1").setAttribute("src" , "images/dice5.png");
  }
  else{
    document.querySelector(".img1").setAttribute("src" , "images/dice6.png");
  }

 var n = Math.random();
 n = Math.floor(n*6 + 1);
 if(n === 1){
   document.querySelector(".img2").setAttribute("src" , "images/dice1.png");
 }
  else if (n === 2) {
    document.querySelector(".img2").setAttribute("src" , "images/dice2.png");
  }
  else if (n === 3) {
    document.querySelector(".img2").setAttribute("src" , "images/dice3.png");
  }
  else if (n === 4){
    document.querySelector(".img2").setAttribute("src" , "images/dice4.png");
  }
  else if (n === 5){
    document.querySelector(".img2").setAttribute("src" , "images/dice5.png");
  }
  else{
    document.querySelector(".img2").setAttribute("src" , "images/dice6.png");
  }

function winner(){
  if(randomNo === n){
    document.querySelector("h1").innerHTML = "Draw";
  }
  else if(randomNo > n){
      document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }
  else{
      document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
}
winner();
