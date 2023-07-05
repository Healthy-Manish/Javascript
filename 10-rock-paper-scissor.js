let score =JSON.parse(localStorage.getItem('score'))||
{

wins: 0,
losses: 0,
ties:0
};

updateScore();

// if(!score){
//   score={

//     wins: 0,
//     losses: 0,
//     ties:0
//   }
// }
function playGame(pickPlayer){
const computerMove = pickComputerMove();
let result = '';
if(pickPlayer === 'scissors'){
if(computerMove === 'rock'){
result = 'You loose';
}else if (computerMove === 'paper'){
result = 'You Win!';
}else{
result = 'Tie';
}


}
else if(pickPlayer === 'paper'){
if(computerMove === 'rock'){
result = 'You Win!';
}else if (computerMove === 'paper'){
result = 'Tie';
}else{
result = 'You loose';
}


}  
else{
if(computerMove === 'rock'){
result = 'Tie';
}else if (computerMove === 'paper'){
result = 'You loose';
}else{
result = 'You Win!';
}}

if(result ==='You Win!'){
score.wins +=1;

}else if(result==='You loose'){
score.losses+=1;
}
else if(result === 'Tie'){
score.ties+=1;
}
localStorage.setItem('score',JSON.stringify(score));    


updateScore();
document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-move')
.innerHTML = `You
<img src="./images/${pickPlayer}-emoji.png" alt="" class="move-icon">

computer
<img src="./images/${computerMove}-emoji.png" alt="" class="move-icon">
`;



}


function updateScore(){
document.querySelector('.js-score')
.innerHTML=  `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
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
