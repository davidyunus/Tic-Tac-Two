function startGame() {

    for(var i = 1; i <= 9; i++) {
        playAgain(i);
    }

    document.turn = 'X';
    document.winner = null; 
    setMessage(document.turn + " First turn " )
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function nextMove(square) {
    if(document.winner != null) {
        setMessage(document.turn + ' already won')
    } else if(square.innerText == '') {
        square.innerText = document.turn;
        switchTurn();
    } else {
        setMessage('Pick another option');
    }
}

function switchTurn() {
    if(checkWinner(document.turn)) {
        setMessage('Congratulation ' + document.turn + ' Won!');
        document.winner = document.turn;
    } else if(document.turn == 'X') {
        document.turn = 'O';
        setMessage("It's " + document.turn + " turn");
    } else {
        document.turn = 'X';
        setMessage("It's " + document.turn + " turn");
    }
}

function checkRow(a, b, c, move) {
    var result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function checkWinner(move) {
    var result = false;
    if(checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) || 
        checkRow(7, 8, 9, move) || 
        checkRow(1, 4, 7, move) || 
        checkRow(2, 5, 8, move) || 
        checkRow(3, 6, 9, move) || 
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}

function getBox(num) {
    return document.getElementById('s' + num).innerText;
}

function playAgain(num) {
    document.getElementById('s' + num).innerText = '';
}