let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScore = document.querySelector("#you");
let compScore = document.querySelector("#comp");
let user = 0;
let comp = 0;

let generateComputerChoice = () => {
    let choiceArr = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * 3);
    return choiceArr[index];
}

let playGame = (userChoice) => {
    let computerChoice = generateComputerChoice();
    if (userChoice === computerChoice) {
        msg.innerText = "Draw";
        msg.style.backgroundColor = "orange";
    }
    else if(userChoice === "rock" && computerChoice === "paper")  {
        msg.innerText = "Computer Won";
        msg.style.backgroundColor = "Red";
        comp++;
        compScore.innerText = comp;
    }
    else if(userChoice === "scissor" && computerChoice === "rock")  {
        msg.innerText = "Computer Won";
        msg.style.backgroundColor = "Red";
        comp++;
        compScore.innerText = comp;
    }
    else if(userChoice === "paper" && computerChoice === "scissor")  {
        msg.innerText = "Computer Won";
        msg.style.backgroundColor = "Red";
        comp++;
        compScore.innerText = comp;
    }
    else{
        msg.innerText = "You Won";
        msg.style.backgroundColor = "Green";
        user++;
        userScore.innerText = user;
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})