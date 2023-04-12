let playerObject = (symbol) => {
    return {symbol};
};

let gameFlowObject = (() => {
    const player1 = playerObject('O');
    const player2 = playerObject ('X');

    const startRestart=()=>{
        let spaces = document.querySelectorAll('div[class*=space]');
        for (let i=0;i<spaces.length;i++){
            spaces[i].innerHTML = '';
            gameboardObject.gameboard.splice(i,1,"");
        }
        let popup= document.querySelector('.popup');
        popup.classList.remove('activated');
      
    }

    const main = (i) => {
        let currentPlayer = gameFlowObject.turn();
        updateBoard(currentPlayer,i);
        updateArray(currentPlayer,i);
        checkWinner();

    }

    const turn = ()=>{
        let numOfX=gameboardObject.gameboard.filter(element => element == 'X').length
        let numOfO = gameboardObject.gameboard.filter(element => element == 'O').length
        if (numOfO<=numOfX){
            return player1;
        } else if (numOfO>numOfX){
            return player2;
        }
    }

    const updateArray = (player,spaceClicked) =>{
        if (gameboardObject.gameboard[spaceClicked] == ''){
            gameboardObject.gameboard.splice(spaceClicked,1,player.symbol);
        }        
    }    

    
    const updateBoard = (player,spaceClicked) => {
        let spaces = document.querySelectorAll('div[class*=space]');
        if (gameboardObject.gameboard[spaceClicked] == ''){
            spaces[spaceClicked].innerHTML = player.symbol;
        }
    }   

    const checkWinner = () => {
        let arr = gameboardObject.gameboard;
        let popup= document.querySelector('.popup');
        if (arr[0]=="X" && arr[1]=="X" && arr[2]=="X"){
            popup.innerText="Player 2 Wins!";
            popup.classList.add("activated");
        }else if (arr[0]=="O" && arr[1]=="O" && arr[2]=="O"){
            popup.innerText= "Player 1 Wins!";
            popup.classList.add("activated");
        }else if (arr[3]=="X" && arr[4]=="X" && arr[5]=="X"){
            popup.innerText="Player 2 Wins!";
            popup.classList.add("activated");
        }else if (arr[3]=="O" && arr[4]=="O" && arr[5]=="O"){
            popup.innerText="Player 1 Wins!";
            popup.classList.add("activated");
        }else if (arr[6]=="X" && arr[7]=="X" && arr[8]=="X"){
            popup.innerText="Player 2 Wins!";
            popup.classList.add("activated");
        }else if (arr[6]=="O" && arr[7]=="O" && arr[8]=="O"){
            popup.innerText="Player 1 Wins!";
            popup.classList.add("activated");
        } else if (arr[0]=="X" && arr[3]=="X" && arr[6]=="X"){
            popup.innerText="Player 2 Wins!";
            popup.classList.add("activated");
        }else if (arr[0]=="O" && arr[3]=="O" && arr[6]=="O"){
            popup.innerText="Player 1 Wins!";
            popup.classList.add("activated");
        }else if (arr[1]=="X" && arr[4]=="X" && arr[7]=="X"){
            popup.innerText="Player 2 Wins!";
            popup.classList.add("activated");
        }else if (arr[1]=="O" && arr[4]=="O" && arr[7]=="O"){
            popup.innerText="Player 1 Wins!";
            popup.classList.add("activated");
        }else if (arr[2]=="X" && arr[5]=="X" && arr[8]=="X"){
            popup.innerText="Player 2 Wins!";
            popup.classList.add("activated");
        }else if (arr[2]=="O" && arr[5]=="O" && arr[8]=="O"){
            popup.innerText="Player 1 Wins!";
            popup.classList.add("activated");
        }else if (arr[0]=="X" && arr[4]=="X" && arr[8]=="X"){
            popup.innerText="Player 2 Wins!";
            popup.classList.add("activated");
        }else if (arr[0]=="O" && arr[4]=="O" && arr[8]=="O"){
            popup.innerText="Player 1 Wins!";
            popup.classList.add("activated");
        }else if (arr[2]=="X" && arr[4]=="X" && arr[6]=="X"){
            popup.innerText="Player 2 Wins!";
            popup.classList.add("activated");
        }else if (arr[2]=="O" && arr[4]=="O" && arr[6]=="O"){
            popup.innerText="Player 1 Wins!";
            popup.classList.add("activated");
        }else {
            if (arr.includes("")===false){
                popup.innerText="Cat Wins!";
                popup.classList.add("activated");
            }
        }
        
    }
    

    return{main,turn,updateArray,updateBoard,checkWinner,startRestart}
})();

const gameboardObject = (() => {
    let gameboard = ['','','','','','','','',''];

    const makeBoard = () =>{
        let board = document.querySelector('.board');
        board.style.gridTemplateColumns = `repeat( 3, 1fr)`;
        board.style.gridTemplateRows = `repeat( 3, 1fr)`;

        let columns=3;
        let rows = 3;

        for(let i = 0;i< columns*rows;i++){
            let space = document.createElement('div');
            board.insertAdjacentElement('beforeend',space);
            space.classList.add("space" + [i]);
        };

        let spaces = document.querySelectorAll('div[class*=space]');
        for (let i = 0 ; i <spaces.length;i++){
            spaces[i].addEventListener('click',() => {gameFlowObject.main(i)});

        }

        let btn = document.querySelector('#start-restart');
        btn.addEventListener('click',gameFlowObject.startRestart)
    
    }
    
    return{gameboard,makeBoard,}

})();

gameboardObject.makeBoard();










