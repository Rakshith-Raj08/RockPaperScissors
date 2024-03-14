document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.b1');
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
  
    button.addEventListener('click', function() {
      container1.classList.add('hidden');
      container2.classList.remove('hidden');
    });
  });
  

  let status1 = document.getElementById("status1");
  let status2 = document.getElementById("status2");
  
  let rock = document.getElementById("rock");
  let paper = document.getElementById("paper");
  let scissor = document.getElementById("scissor");
  
  function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }
  
  let computerScore = 0;
  let playerScore = 0;
  const roundsToWin = 3;
  
  rock.addEventListener("click", function() {
    playRound(0); // Rock is represented by 0
  });
  
  paper.addEventListener("click", function() {
    playRound(1); // Paper is represented by 1
  });
  
  scissor.addEventListener("click", function() {
    playRound(2); // Scissor is represented by 2
  });
  
  function playRound(playerChoice) {
    let computerChoice = getRandomInt();
  
    if (computerChoice === playerChoice) {
      status1.textContent = "It is a draw!!";
    } else if (
      (computerChoice === 0 && playerChoice === 2) || // Rock vs Scissor
      (computerChoice === 1 && playerChoice === 0) || // Paper vs Rock
      (computerChoice === 2 && playerChoice === 1) // Scissor vs Paper
    ) {
      status1.textContent = "You lost!!";
      computerScore++;
    } else {
      status1.textContent = "You won!!";
      playerScore++;
    }
  
    updateScore();
  }
  
  function updateScore() {
    status2.textContent = "Player: " + playerScore + " Computer: " + computerScore;
  
    if (playerScore >= roundsToWin || computerScore >= roundsToWin) {
      endGame();
    }
  }
  
  function endGame() {
    // Display the final result
    if (playerScore > computerScore) {
      status1.textContent = "You Won the game!!";
    } else if (computerScore > playerScore) {
      status1.textContent = "You Lost the game!!";
    } else {
      status1.textContent = "It's a draw in the game!!";
    }
  
    // Disable the buttons after the game ends
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
  
    // Show the restart button
    let restartBtn = document.getElementById("restartBtn");
    restartBtn.style.display = "block";
  }
  
  // Restart game function
  function restartGame() {
    computerScore = 0;
    playerScore = 0;
    status1.textContent = "Game restarted";
    status2.textContent = "Player: " + playerScore + " Computer: " + computerScore;
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
    let restartBtn = document.getElementById("restartBtn");
    restartBtn.style.display = "none";
  }
  
  // Event listener for the restart button
  document.getElementById("restartBtn").addEventListener("click", restartGame);
  