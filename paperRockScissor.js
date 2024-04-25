let choices = document.querySelectorAll(".choices");
 youScore = document.querySelector("#you-score");
 compScore = document.querySelector("#comp-score");
 let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let you_Score = 0;
let comp_Score = 0;

const generateCompChoice = () => {
    const options = ["paper", "rock", "scissor"];
    let randomInd = Math.floor(Math.random() * 3);
    return options[randomInd];
}

const playGame = (userChoice) => {
    console.log("user Choice", userChoice);
}
const showWinner = (youWin, userChoice, compChoice) => {
    if (userChoice === "paper") {
        // computer choice may be scissor or rock
        if (compChoice === "scissor") {
            youWin=false;
        } else {
            youWin=true;
        }
    }
    else if (userChoice === "rock") {
        // computer choice may be scissor or paper
        if (compChoice === "paper") {
            youWin=false;
        } else {
            youWin=true;
        }
    }
    else  {
        // computer choice may be rock or paper
        if (compChoice === "rock") {
            youWin=false;
        } 
        else {
            youWin=true;
        }
    }
        if(youWin){
            you_Score++;
            youScore.innerText=you_Score;
            msg.innerText = `You Win! ${userChoice} beat ${compChoice}`;
            msg.style.backgroundColor = "green";
        }
        else{
            comp_Score++;
            compScore.innerText=comp_Score;
            msg.innerText = `You loss! ${compChoice} beat ${userChoice} `;
            msg.style.backgroundColor = "red";
        }
}    
         // funtion for rset
    reset.addEventListener("click", ()=>{
        youScore.innerText="0";
        compScore.innerText="0";
        msg.innerText="Play and Move";
        msg.style.backgroundColor="#704444";
        you_Score=0;
        comp_Score=0;
    } );

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        const compChoice = generateCompChoice();
        console.log("computer choice", compChoice);
        if (userChoice === compChoice) {
            msg.innerText = "Match was Draw!";
            msg.style.backgroundColor="black";
        } 
        else{
            showWinner(true ,userChoice, compChoice);
        }
    });
});
