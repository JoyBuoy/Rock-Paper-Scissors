
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
    


