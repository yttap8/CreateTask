var board = [
  ['','',''],
  ['','',''],
  ['','','']
];

var message;
var move;
var gameover;

//main game, runs every time a tile is clicked
function game(element){
  if (gameover){
    return;
  }
  turns();
  if (element.innerText != ''){
    return;
  }
  element.innerText = move;
  setBoard();
  check();
}

function turns(){
  if (move == 'X'){
    move = 'O';
    document.getElementById("message").innerHTML = "It's X's Turn";
  }else{
    move = 'X'
    document.getElementById("message").innerHTML = "It's O's Turn";
  }
}

function setBoard(){
  board[0][0] = document.getElementById('0').innerText;
  board[0][1] = document.getElementById('1').innerText;
  board[0][2] = document.getElementById('2').innerText;
  board[1][0] = document.getElementById('3').innerText;
  board[1][1] = document.getElementById('4').innerText;
  board[1][2] = document.getElementById('5').innerText;
  board[2][0] = document.getElementById('6').innerText;
  board[2][1] = document.getElementById('7').innerText;
  board[2][2] = document.getElementById('8').innerText;
}

function check() {
  //rows
  for (var r = 0; r<3; r++){
     if (board[r][0] == board [r][1]&& board[r][1]== board[r][2] && board[r][1]!=''){
       if (board [r][1]=='X'){
         message = 'X wins';
       }else{
         message = 'O wins';
       }
       gameover = true;
       document.getElementById("message").innerHTML = message;
       return;
     }
  }
  //columns
  for (var c = 0; c<3; c++){
    if (board[0][c] == board [1][c]&& board[1][c]== board[2][c] && board[0][c]!=''){
        if (board [0][c]=='X'){
          message = 'X wins';
        }else{
          message = 'O wins';
        }
        gameover = true;
        document.getElementById("message").innerHTML = message;
        return;
     }
  }
  //diagonals
  if (board[0][0] == board [1][1]&& board[1][1]== board[2][2] && board[0][0]!=''){
     if (board [0][0]=='X'){
        message = 'X wins';
    }else{
        message = 'O wins';
    }
    gameover = true;
    document.getElementById("message").innerHTML = message;
    return;
  }
  if (board[0][2] == board [1][1]&& board[1][1]== board[2][0] && board[0][2]!=''){
     if (board [0][2]=='X'){
        message = 'X wins';
    }else{
        message = 'O wins';
    }
    gameover = true;
    document.getElementById("message").innerHTML = message;
    return;
  }
}
