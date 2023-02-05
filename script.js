//set the game grid up


//create squares for game grid
const gameGrid = document.querySelector('#game-board')

let gridSize = 9;
const grid = (() => {
for (let z = 0; z < gridSize; z++) {
    let emptySquare = document.createElement('div') 
    emptySquare.classList.add('square')  
    gameGrid.appendChild(emptySquare)    

}
})()

//user input for player names 

let name1 = window.prompt("Enter name for player 1 (X)")
let name2 = window.prompt("Enter name for player 2 (0)")

//display for player names
let first = document.querySelector('.players p.first')
let second = document.querySelector('.players p.second')
first.textContent = name1 + '(X)'
second.textContent = name2 + '(0)'

//array for keeping track of game

let gameBoard = new Array(9); //records moves on the gameboard.

const Player = (name, sign) => {

    const getName  = () => name;
    const getSign = () => sign;
  

    return {getName, getSign};
  };

  

  const playerOne = Player(name1, 'X')

  const playerTwo = Player(name2, '0')
  let end = false;

  //scan the array for the sign of the last move and define next array index as sign different to the previous. Set DOM display to this
function gameTracker () {
  turnDisplay()

    for (let i = 0; i <gameBoard.length; i++) {
if (end === true) {
  return false
}

if (gameBoard[0] === undefined && i === 0) {
gameBoard[0] = (playerOne.getSign())

return this.textContent = gameBoard[0]
                              //get sign for playerOne upon start upon and push too gameBoard[0]
    }

else if (gameBoard[i] === undefined && gameBoard[i-1] === 'X') {

gameBoard[i] = (playerTwo.getSign())  
turnDisplay()
 //get sign for playerTwo ('0') and push
return this.textContent = gameBoard[i]
}

else if (gameBoard[i] === undefined && gameBoard[i-1] === '0') {

gameBoard[i] = (playerOne.getSign())
turnDisplay()
return this.textContent = gameBoard[i]
}
else if (this.textContent == 'X' || this.textContent == '0') { //logic for squares already filled
   return 
    }


}
}


//DOM interaction and elements

let playerOneWin  = document.querySelector('.player1')
let playerTwoWin = document.querySelector('.player2')
let draw = document.querySelector('.draw')

let playerOneWinScore = document.querySelector('.player1 p.first-score')
let playerTWoWinScore = document.querySelector('.player2 p.second-score')

playerOneWinScore.textContent = name1
playerTWoWinScore.textContent = name2

let turnOne = document.querySelector('.turn p.turn1')
let turnTwo = document.querySelector('.turn p.turn2')

turnOne.textContent = `It's ${name1}'s turn`
turnTwo.textContent = `It's ${name2}'s turn`


function reset () {
 for (let i = 0; i < square.length; i++) {
  square[i].textContent = ""
  square[i].style.background = '#fcff9d'
  playerOneWin.setAttribute('style', 'display: none;')
  playerTwoWin.setAttribute('style', 'display: none;')
  draw.setAttribute('style', 'display: none')
  turnTwo.setAttribute('style', 'display: none')
  turnOne.setAttribute('style', 'display: block')
  gameBoard = new Array(9)
  end = false
        
 }
}


//listen for click in each square
let square = document.querySelectorAll('.square')


const int = (() => {
for (let z = 0; z < square.length; z++) {


  square[z].addEventListener('click', gameTracker)
square[z].addEventListener('click', () => {
 
    //PLAYER 1 WIN TRACKER 
    //horizontal wins for player 1
    if (square[0].textContent == 'X' && square[1].textContent == 'X' && square[2].textContent == 'X') {
   playerOneWin.setAttribute('style', 'display: block')
   square[0].style.background = '#e3e3e3'
   square[1].style.background = '#e3e3e3'
   square[2].style.background = '#e3e3e3'
 end = true
 return false

   
        }
        else if (square[3].textContent == 'X' && square[4].textContent == 'X' && square[5].textContent == 'X') {
        playerOneWin.setAttribute('style', 'display: block')
        square[3].style.background = '#e3e3e3'
        square[4].style.background = '#e3e3e3'
        square[5].style.background = '#e3e3e3'
        end = true
        return false
            }
            else if (square[6].textContent == 'X' && square[7].textContent == 'X' && square[8].textContent == 'X') {
            playerOneWin.setAttribute('style', 'display: block')
            square[6].style.background = '#e3e3e3'
            square[7].style.background = '#e3e3e3'
            square[8].style.background = '#e3e3e3'
            end = true
        return false
                }
                //vertical wins for player 1

                if (square[0].textContent == 'X' && square[3].textContent == 'X' && square[6].textContent == 'X') {
                   playerOneWin.setAttribute('style', 'display: block')
                   square[0].style.background = '#e3e3e3'
                   square[3].style.background = '#e3e3e3'
                   square[6].style.background = '#e3e3e3'
                   end = true
        return false
                    }
                    else if (square[1].textContent == 'X' && square[4].textContent == 'X' && square[7].textContent == 'X') {
                 playerOneWin.setAttribute('style', 'display: block')
                 square[1].style.background = '#e3e3e3'
                 square[4].style.background = '#e3e3e3'
                 square[7].style.background = '#e3e3e3'
                 end = true
        return false
                        }
                        else if (square[2].textContent == 'X' && square[5].textContent == 'X' && square[8].textContent == 'X') {
                        playerOneWin.setAttribute('style', 'display: block')
                        square[2].style.background = '#e3e3e3'
                        square[5].style.background = '#e3e3e3'
                        square[8].style.background = '#e3e3e3'
                        end = true
        return false
                            }

                            // diagonal wins player 1
                            else if (square[0].textContent == 'X' && square[4].textContent == 'X' && square[8].textContent == 'X') {
                              playerOneWin.setAttribute('style', 'display: block')
                              square[0].style.background = '#e3e3e3'
                              square[4].style.background = '#e3e3e3'
                              square[8].style.background = '#e3e3e3'
                              end = true
        return false
                                   }
                                   else if (square[2].textContent == 'X' && square[4].textContent == 'X' && square[6].textContent == 'X') {
                                   playerOneWin.setAttribute('style', 'display: block')
                                   square[2].style.background = '#e3e3e3'
                                   square[4].style.background = '#e3e3e3'
                                   square[6].style.background = '#e3e3e3'
                                   end = true
        return false
                                       }

                                       //PLAYER 2 WIN TRACKER

                                       //horizontal wins player 2
                                     if (square[0].textContent == '0' && square[1].textContent == '0' && square[2].textContent == '0') {
                                  playerTwoWin.setAttribute('style', 'display: block')
                                  square[0].style.background = '#e3e3e3'
                                  square[1].style.background = '#e3e3e3'
                                  square[2].style.background = '#e3e3e3'
                                  end = true
        return false
                                    
                                        }
                                        else if (square[3].textContent == '0' && square[4].textContent == '0' && square[5].textContent == '0') {
                                          playerTwoWin.setAttribute('style', 'display: block')
                                          square[3].style.background = '#e3e3e3'
                                          square[4].style.background = '#e3e3e3'
                                          square[5].style.background = '#e3e3e3'
                                          end = true
        return false
                                            }
                                            else if (square[6].textContent == '0' && square[7].textContent == '0' && square[8].textContent == '0') {
                                             playerTwoWin.setAttribute('style', 'display: block')
                                             square[6].style.background = '#e3e3e3'
                                             square[7].style.background = '#e3e3e3'
                                             square[8].style.background = '#e3e3e3'
                                             end = true
        return false
                                                }

                                                    //vertical wins for player 2

                if (square[0].textContent == '0' && square[3].textContent == '0' && square[6].textContent == '0') {
                  playerTwoWin.setAttribute('style', 'display: block')
                  square[0].style.background = '#e3e3e3'
                  square[3].style.background = '#e3e3e3'
                  square[6].style.background = '#e3e3e3'
                  end = true
        return false
                    }
                    else if (square[1].textContent == '0' && square[4].textContent == '0' && square[7].textContent == '0') {
                    playerTwoWin.setAttribute('style', 'display: block')
                    square[1].style.background = '#e3e3e3'
                    square[4].style.background = '#e3e3e3'
                    square[7].style.background = '#e3e3e3'
                    end = true
        return false
                        }
                        else if (square[2].textContent == '0' && square[5].textContent == '0' && square[8].textContent == '0') {
                           playerTwoWin.setAttribute('style', 'display: block')
                           square[2].style.background = '#e3e3e3'
                           square[5].style.background = '#e3e3e3'
                           square[8].style.background = '#e3e3e3'
                           end = true
        return false
                            }

                                  // diagonal wins player 2
                                  else if (square[0].textContent == '0' && square[4].textContent == '0' && square[8].textContent == '0') {
                                 playerTwoWin.setAttribute('style', 'display: block')
                                 square[0].style.background = '#e3e3e3'
                                 square[4].style.background = '#e3e3e3'
                                 square[8].style.background = '#e3e3e3'
                                 end = true
        return false
                                       }
                                       else if (square[2].textContent == '0' && square[4].textContent == '0' && square[6].textContent == '0') {
                                          playerTwoWin.setAttribute('style', 'display: block')
                                          square[2].style.background = '#e3e3e3'
                                          square[4].style.background = '#e3e3e3'
                                          square[6].style.background = '#e3e3e3'
                                          end = true
        return false
                                           }
                                         
//TIE TRACKER

if (gameBoard[8] != undefined && end === false) {
draw.setAttribute('style', 'display: block;')
square[0].style.background = '#e3e3e3'
square[1].style.background = '#e3e3e3'
square[2].style.background = '#e3e3e3'
square[3].style.background = '#e3e3e3'
square[4].style.background = '#e3e3e3'
square[5].style.background = '#e3e3e3'
square[6].style.background = '#e3e3e3'
square[7].style.background = '#e3e3e3'
square[8].style.background = '#e3e3e3'

end = true
return false
}

}, true)

}
})()

function turnDisplay () { 
  

  for (let x = 0; x < gameBoard.length; x++) {
   
if (gameBoard[0] == undefined) {  //upon game start
  turnTwo.setAttribute('style', 'display: block')
return   turnOne.setAttribute('style', 'display: none')
}

  else if (gameBoard[x-1] == 'X' && gameBoard[x] == undefined) {
      turnOne.setAttribute('style', 'display: none')
 return  turnTwo.setAttribute('style', 'display: block')
    }
    
    else if (gameBoard[x-1] == '0' && gameBoard[x] == undefined) {
      turnTwo.setAttribute('style', 'display: none')
 return   turnOne.setAttribute('style', 'display: block')
  
    }
  
 }
}
