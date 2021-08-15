function capitalize(text){
    text=text.toLowerCase();
    
    let firstchar= text.slice(0,1);
    
    let replacement=firstchar.toUpperCase();
    
    text=text.replace(firstchar,replacement);
    return text;
  }

function computerPlay(){
    let num=Math.floor(Math.random()*3);
    if(num==0){
        return "Rock";
    }
    else if(num ==1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}




let playerScore=0,computerScore=0;

let playerMove="rock";
let computerMove="rock";

let roundDiv=document.querySelector('h1');
let roundCounter=1;
let paperButton=document.querySelector('#paperButton');
let rockButton=document.querySelector('#rockButton');
let scissorsButton=document.querySelector('#scissorsButton');

let playerScoreDiv=document.querySelector('#playerScore');
let computerScoreDiv=document.querySelector('#computerScore');

let playerMoveDiv=document.querySelector('#playerMove');
let computerMoveDiv=document.querySelector('#computerMove');

let resultDiv=document.querySelector('#result');

let playerPic=document.querySelector('#playerMove');
let computerPic=document.querySelector('#computerMove');

paperButton.addEventListener('click', ()=>{playerMove='paper'; game();});
rockButton.addEventListener('click', ()=>{playerMove='rock'; game();});
scissorsButton.addEventListener('click', ()=>{playerMove='scissors'; game();});


let playerwins=false;
let tie=false;
function playRound(playerSelection,computerSelection){
    
    playerSelection=playerSelection.toUpperCase();
    computerSelection=computerSelection.toUpperCase()
    
    playerMove=playerSelection.toLowerCase();
    computerMove=computerSelection.toLowerCase();

    playerwins=false;
    tie=false;
    if(playerSelection==computerSelection){
        tie=true;
        return "It's a Tie! "+capitalize(playerSelection)+" ties with "+capitalize(computerSelection);
        
    }
    else if(playerSelection=="ROCK"){
        if(computerSelection=="SCISSORS"){
            playerwins=true;
        }
    }
    else if(playerSelection=="PAPER"){
        if(computerSelection=="ROCK"){
            playerwins=true;
        }
    }
    else if(playerSelection=="SCISSORS"){
        if(computerSelection=="PAPER"){
            playerwins=true;
        }
    }

    if (playerwins){
        return "You Win! "+capitalize(playerSelection)+" beats "+capitalize(computerSelection);
    }
    else{
        return "You Lost! "+capitalize(computerSelection)+" beats "+capitalize(playerSelection);
    }
}





function game(){
    
    let announcement=playRound(playerMove, computerPlay())
    
    playerPic.src="images/playericons/"+playerMove+".png";
    computerPic.src="images/computericons/"+computerMove+".png";

    console.log(announcement);
    resultDiv.textContent=announcement;

    roundCounter++;
    roundDiv.textContent="Round "+roundCounter;
    if(tie){

    }
    else if(playerwins){
        playerScore++;
    }
    else {
        computerScore++;
    }
    
    console.log(" Score: "+playerScore+" - "+computerScore);

    computerScoreDiv.textContent=computerScore;
    playerScoreDiv.textContent=playerScore;
    
    if(playerScore==5){
        console.log("You Won the Game!");
        resultDiv.textContent="You Won the Game!"
    }
    else if(computerScore==5){
        console.log("You Lost the Game!");
        resultDiv.textContent="You Lost the Game!";
    }

}



