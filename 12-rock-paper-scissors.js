const score =JSON.parse(localStorage.getItem('score'))||
{
  wins:0,
  losses: 0,
  ties: 0
};

// if(!score){
//   score = {wins:0,
//   losses: 0,
//   ties: 0};
// }

updateScoreElement();



function playGame(pickPlayer){
  const computerMove = pickComputerMove();
    let result = '';
  if(pickPlayer === 'scissors'){
    if(computerMove === 'rock'){
      result = 'You Loose!';
    }else if (computerMove === 'paper'){
      result = 'You Win!';
    }else{
      result = 'Tie';
    }

    // alert(`You picked ${pickPlayer}. Computer picked ${computerMove}. ${result}`);
  }
  else if(pickPlayer === 'paper'){
    if(computerMove === 'rock'){
      result = 'You Win!';
    }else if (computerMove === 'paper'){
      result = 'Tie';
    }else{
      result = 'You Loose!';
    }

    // alert(`You picked paper. Computer picked ${computerMove}. ${result}`);
  }  
  else if(pickPlayer ==='rock'){
    if(computerMove === 'rock'){
      result = 'Tie';
    }else if (computerMove === 'paper'){
      result = 'You Loose!';
    }else{
      result = 'You Win!';
    }
    
  }
  if(result === 'You Win!'){
    score.wins +=1;
  }
  else if( result === 'You Loose!'){
    score.losses+=1;
  }
  else if(result === 'Tie'){
    score.ties+=1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = `${result}`;

  document.querySelector('.js-move').innerHTML
   =`  You

<img src="./images/${pickPlayer}-emoji.png" alt="" class="images">

Computer
<img src="./images/${computerMove}-emoji.png" alt="" class="images">`;

  
}

function updateResult(){
document.querySelector('.js-result').innerHTML = `${result}`;

}

function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML=`Wins: ${score.wins} , Losses: ${score.losses}, Ties: ${score.ties}`; 

}

function pickComputerMove(){
  
  const randomNumber = Math.random();
  let computerMove = '';
          if(randomNumber>=0 && randomNumber<1/3){
       computerMove = 'rock';


    }else if (randomNumber>=1/3 && randomNumber<2/3){

       computerMove = 'paper';

    }
    else{
       computerMove = 'scissors';

    }
  //   console.log(computerMove);
    return computerMove;
  }
let isAutoPlay = false;
let intervalId;

// const autoPlay = () =>{

// };
document.querySelector('.js-rock-button').addEventListener('click',()=>{
  playGame('rock')
});
document.querySelector('.js-paper-button').addEventListener('click',()=>{
  playGame('paper')
});
document.querySelector('.js-scissors-button').addEventListener('click',()=>{
  playGame('scissors')
});
function autoPlay(){
  if(!isAutoPlay){
     intervalId = setInterval(()=>{
      const PlayerMove = pickComputerMove();
      playGame(PlayerMove);
    },1000);
    isAutoPlay = true;
  }
    else{
      clearInterval(intervalId);
      isAutoPlay = false;
    }
  
}

