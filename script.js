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

//array for keeping track of game

let gameBoard = new Array(9); //records moves on the gameboard.

const Player = (name, sign) => {

    const getName  = () => name;
    const getSign = () => sign;
  

    return {getName, getSign};
  };


  const playerOne = Player('player one', 'X')

  const playerTwo = Player('player two', '0')
  let end = false;

  //scan the array for the sign of the last move and define next array index as sign different to the previous. Set DOM display to this
function gameTracker () {


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
 //get sign for playerTwo ('0') and push
return this.textContent = gameBoard[i]
}

else if (gameBoard[i] === undefined && gameBoard[i-1] === '0') {
gameBoard[i] = (playerOne.getSign())

return this.textContent = gameBoard[i]
}
else if (this.textContent == 'X' || this.textContent == '0') { //logic for squares already filled
   return 
    }


}
}


//DOM interaction and elements

playerOneWin  = document.querySelector('.player1')
playerTwoWin = document.querySelector('.player2')

function reset () {
 for (let i = 0; i < square.length; i++) {
  square[i].textContent = ""
  playerOneWin.setAttribute('style', 'display: none;')
  playerTwoWin.setAttribute('style', 'display: none;')
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
 end = true
 return false

   
        }
        else if (square[3].textContent == 'X' && square[4].textContent == 'X' && square[5].textContent == 'X') {
        playerOneWin.setAttribute('style', 'display: block')
        end = true
        return false
            }
            else if (square[6].textContent == 'X' && square[7].textContent == 'X' && square[8].textContent == 'X') {
            playerOneWin.setAttribute('style', 'display: block')
            end = true
        return false
                }
                //vertical wins for player 1

                if (square[0].textContent == 'X' && square[3].textContent == 'X' && square[6].textContent == 'X') {
                   playerOneWin.setAttribute('style', 'display: block')
                   end = true
        return false
                    }
                    else if (square[1].textContent == 'X' && square[4].textContent == 'X' && square[7].textContent == 'X') {
                 playerOneWin.setAttribute('style', 'display: block')
                 end = true
        return false
                        }
                        else if (square[2].textContent == 'X' && square[5].textContent == 'X' && square[8].textContent == 'X') {
                        playerOneWin.setAttribute('style', 'display: block')
                        end = true
        return false
                            }

                            // diagonal wins player 1
                            else if (square[0].textContent == 'X' && square[4].textContent == 'X' && square[8].textContent == 'X') {
                              playerOneWin.setAttribute('style', 'display: block')
                              end = true
        return false
                                   }
                                   else if (square[2].textContent == 'X' && square[4].textContent == 'X' && square[6].textContent == 'X') {
                                   playerOneWin.setAttribute('style', 'display: block')
                                   end = true
        return false
                                       }

                                       //PLAYER 2 WIN TRACKER

                                       //horizontal wins player 2
                                     if (square[0].textContent == '0' && square[1].textContent == '0' && square[2].textContent == '0') {
                                  playerTwoWin.setAttribute('style', 'display: block')
                                  end = true
        return false
                                    
                                        }
                                        else if (square[3].textContent == '0' && square[4].textContent == '0' && square[5].textContent == '0') {
                                          playerTwoWin.setAttribute('style', 'display: block')
                                          end = true
        return false
                                            }
                                            else if (square[6].textContent == '0' && square[7].textContent == '0' && square[8].textContent == '0') {
                                             playerTwoWin.setAttribute('style', 'display: block')
                                             end = true
        return false
                                                }

                                                    //vertical wins for player 2

                if (square[0].textContent == '0' && square[3].textContent == '0' && square[6].textContent == '0') {
                  playerTwoWin.setAttribute('style', 'display: block')
                  end = true
        return false
                    }
                    else if (square[1].textContent == '0' && square[4].textContent == '0' && square[7].textContent == '0') {
                    playerTwoWin.setAttribute('style', 'display: block')
                    end = true
        return false
                        }
                        else if (square[2].textContent == '0' && square[5].textContent == '0' && square[8].textContent == '0') {
                           playerTwoWin.setAttribute('style', 'display: block')
                           end = true
        return false
                            }

                                  // diagonal wins player 2
                                  else if (square[0].textContent == '0' && square[4].textContent == '0' && square[8].textContent == '0') {
                                 playerTwoWin.setAttribute('style', 'display: block')
                                 end = true
        return false
                                       }
                                       else if (square[2].textContent == '0' && square[4].textContent == '0' && square[6].textContent == '0') {
                                          playerTwoWin.setAttribute('style', 'display: block')
                                          end = true
        return false
                                           }
                                         


}, true)

}
})()
