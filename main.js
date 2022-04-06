var board = [
  ['O','X','O'],
  ['X','X','O'],
  ['O','O','X']
];

var message;
var move;
var gameover;

function turns(move){
  if (move == 'X'){
    move = 'O';
  }else{
    move = 'X'
  }
}

function game(){
  if (gameover){
    return;
  }
  turns();
  var cord = this.id.split(",");
  var r = parseInt(cord[0]);
  var c = parseInt(cord[1]);
  check();
}
function check(board) {
  //rows
  for (var r = 0; r<3; r++){
     if (board[r][0] == board [r][1]&& board[r][1]== board[r][2] && board[r][1]!=''){
       if (board [r][1]=='X'){
         message = 'X wins';
       }else{
         message = 'O wins';
       }
       gameover = true;
       return;
     }
  }
  //columns
  for (var c = 0; c<3; c++){
    if (board[0][c] == board [1][c]&& board[1][c]== board[2][c] && board[0][c]!=''){
        if (board [r][1]=='X'){
          message = 'X wins';
        }else{
          message = 'O wins';
        }
        gameover = true;
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
    return;
  }
  if (board[0][2] == board [1][1]&& board[1][1]== board[2][0] && board[0][2]!=''){
     if (board [0][2]=='X'){
        message = 'X wins';
    }else{
        message = 'O wins';
    }
    gameover = true;
    return;
  }
  document.getElementById("message").innerHTML = message;
}
