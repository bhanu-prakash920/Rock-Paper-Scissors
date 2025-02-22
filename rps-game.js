function ComputerMove() {
  let computerMove = '';
  const randomNum = Math.floor(Math.random() * 3);
if(randomNum === 0){ 
  computerMove = 'rock';}
  else if (randomNum === 1){
      computerMove = 'paper';}
  else {
      computerMove = 'scissors';}

   
  return computerMove;

}
function playGame(playermove){
  const computerMove = ComputerMove();
  
  let result = '';
  if (playermove === 'scissors') {
      if (computerMove === 'rock') {
          result = 'You Lose.';
          score.losses++;
      }
      else if (computerMove === 'paper') {
          result = 'You Win.';
          score.wins++;
      } else {
          result = 'Tie.';
          score.tie++;
      }
      

      }
      else if (playermove === 'paper') {
              if (computerMove === 'rock') {
              result = 'You Win.';
              score.wins++;
          }
          else if (computerMove === 'paper') {
              result = 'Tie.';
              score.tie++;
          } else {
              result = 'You Lose';
              score.losses++;
          }

      }
      else if(playermove === 'rock') {
          if (computerMove === 'scissors') {
              result = 'You Win.';
              score.wins++;
          }
          else if (computerMove === 'rock') {
              result = 'Tie.';
              score.tie++;
          } else {
              result = 'You Lose.';
              score.losses++;
          }
      }


      
      localStorage.setItem('score',JSON.stringify(score)); 
      displayLines();    
      document.querySelector('.resultLine').innerHTML = result;
  document.querySelector('.movesLine').innerHTML = (`You <img src="images/${playermove}-emoji.png" class="imgs"> You <img src="images/${computerMove}-emoji.png" class="imgs">Computer `);
     

   
}
function displayLines() {   
  

  document.querySelector('.scoreLine').innerHTML = (`Wins: ${score.wins} , Losses: ${score.losses}, Tie: ${score.tie}`) ; 
}


let score = JSON.parse(localStorage.getItem('scores')) || 
  {
      wins: 0,
      losses: 0,
      tie: 0
  } ;