let humanscore = 0;
let computerscore = 0;


function getcomputerchoice() {
    let count = Math.floor(Math.random()*3);

    const choice = ["rock", "paper", "scissors"];
    return choice[count];
}

function gethumanchoice(){
    let user_choice = prompt("Please enter your choice");
    
    user_choice = user_choice.toLowerCase();
    
    return user_choice;
    }

function playround(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors"){
    console.log("You win, Rock beats Scissors");
    humanscore = humanscore+1;
    }
    
    else if (humanChoice == "paper" && computerChoice == "rock"){
    console.log("You win, Paper beats rock");
    humanscore = humanscore+1;
    }
    
    else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win, Scissors beats paper");
    humanscore = humanscore+1;
    }
    
    else if (humanChoice == computerChoice) {
    console.log("Its a draw, " + humanChoice + " and " + computerChoice);
    }
    
    else {
    computerscore = computerscore+1;
    console.log("You Lose " + computerChoice + " beats " + humanChoice );
    }
}


function playGame() {

    for (let i = 1;i<=5; i++) {
    const humanChoice = gethumanchoice();
    const computerChoice = getcomputerchoice();
    
    playround(humanChoice, computerChoice);
    }
    console.log("User Score: " + humanscore + " and Computer Score: " + computerscore);
    }
    
    
playGame();

    


