//set the game up


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

//make array to keep track of game
const gameBoard = new Array(9); //records moves on the gameboard.

const Player = (name, sign) => {

    const getName  = () => name;
    const getSign = () => sign;
  

    return {getName, getSign};
  };


  const playerOne = Player('player one', 'X')

  const playerTwo = Player('player two', '0')


  //scan the array for the sign of the last move and define next array index as sign different to the previous. Set DOM display to this
function gameTracker () {


    for (let i = 0; i <gameBoard.length; i++) {

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


//DOM interaction


//listen for click in each square
let square = document.querySelectorAll('.square')

for (let z = 0; z < square.length; z++) {
square[z].addEventListener('click', gameTracker);

}
//set display by scanning game array 
