let n;
function computerPlay() {
  let choices = ['rock', 'paper', 'scissors'];
  n = Math.floor(Math.random() * 3);
  return choices[n];
}

function playerPlay() {
  let choice = prompt('Pick rock, paper, or scissors:');
  choice = choice.toLowerCase();
  return choice;
}

const computerSelection = computerPlay();

// let playerSelection = playerPlay();
 let playerSelection;

function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    return `It's a draw! Both players chose ${playerSelection}.`
  } else if (computerSelection === 'rock' && playerSelection === 'paper') {
      return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
      return  `You lose. ${computerSelection} beats ${playerSelection}.`;
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
      return `You lose. ${computerSelection} beats ${playerSelection}.`;
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
      return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
      return `You lose. ${computerSelection} beats ${playerSelection}.`;
  } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
      return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
      return 'You did not choose rock, paper or scissors!';
  }
}

let playerScore = 0;
let computerScore = 0;

  function game() {

    playRound(computerSelection, playerSelection)

    if (computerSelection === playerSelection) {
      return `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        playerScore += 1;
        return `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore += 1;
        return `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore += 1;
        return `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
      playerScore += 1;
        return `player score: ${playerScore} | computerScore: ${computerScore}`;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore += 1;
        return `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
      playerScore += 1;
      return `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    } else {
      return `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    }
  }

  for(let round = 0; round >= 0; round++) {
    playerSelection = playerPlay();
    console.log(playRound(computerSelection, playerSelection));
    console.log(game());

    if (playerScore === 3) {
      console.log('Game Over. You won!!!');
      break;
    }
    else if (computerScore === 3) {
      console.log('Game Over. You lost.');
    break;
    }
  }
