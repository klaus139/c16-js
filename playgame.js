

// //user input
let userInput;
let computerChoice;

let startButton = confirm("shall we play a game of rock, paper, scissors")

if(startButton){
    let playerChoice = prompt("please enter rock or paper or scissors")
    if(playerChoice){
        let playerOne = playerChoice.toLowerCase()
        if(playerOne === "rock" || playerOne === "scissors" || playerOne === "paper"){
            //automate the computer choice
            let computerChoice = Math.floor(Math.random() * 3 + 1)//rsndom number of 1 - 3
            let computer;
            if(computerChoice === 1){
                computer = "rock"
            }else if (computerChoice === 2){
                computer = "paper"
            }else{
                computer = "scissors"
            }

            let result;

            if(playerOne === computer){
                result = `Tie Game!: player one choosed ${playerOne} while the computer choosed ${computer}`
            }else if (playerOne === "rock" && computer === "paper"){
                result = `Computer wins!\n, player choosed ${playerOne} while the computer choosed ${computer}\n computer wins`
            }else if(playerOne === "paper" && computer === "scissors"){
                  result = `Computer wins!\n, player choosed ${playerOne} while the computer choosed ${computer}\n computer wins`
            }else if(playerOne === "scissors" && computer === "rock"){
                  result = `Computer wins!\n, player choosed ${playerOne} while the computer choosed ${computer}\n computer wins`
            }else{
                  result = `Player wins!\n, player choosed ${playerOne} while the computer choosed ${computer}\n player wins`
            }
            alert(result)
            let playagain = confirm("DO you want to play another round?")
            if(playagain){
                location.reload()
            }else{
                alert("Thanks for playing")
            }
        }else{
            alert("only rock or paper or scissors value is allowed")
        }
    }
}else{
    alert("ok maybe  next time")
}














//let num = 3.3 = 3
//console.log(Math.round(num))
//console.log(Math.ceil(num))
//console.log(Math.floor(num))

// 3.5 = 4

// 3.3 = 3

// Math.round()

// 3.5 = 4

// 3.4 = 3


// Math.ceil() // rounds to rthe neearest highest number
// 3.5 = 4
// 3.3 = 4
// 3.2 = 4

// Math.floor()//rounds to the neearest lowesr number
// 3.5 =3
// 3.8 = 3
// 3.2 = 3