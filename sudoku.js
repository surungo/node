var os = require('os');
//console.log(os.hostname());
//console.log(os.platform());

var board1 = [
[7,0,2,0,5,0,6,0,0],
[0,4,3,0,0,0,7,5,0],
[0,0,0,0,0,3,0,0,0],
[1,0,0,0,0,9,5,0,0],
[8,0,0,0,0,0,0,9,0],
[0,9,0,0,0,0,0,0,8],
[0,0,9,7,0,0,0,0,5],
[0,0,0,2,0,0,0,0,0],
[0,0,7,0,4,0,2,0,3]
];
let board =[
[7, 0, 2, 0, 5, 4, 6, 3, 9],
[6, 4, 3, 8, 9, 2, 7, 5, 1],
[9, 5, 1, 6, 7, 3, 4, 8, 2],
[1, 2, 4, 3, 8, 9, 5, 6, 7],
[8, 7, 6, 5, 2, 1, 3, 9, 4],
[3, 9, 5, 4, 6, 7, 1, 2, 8],
[2, 1, 9, 7, 3, 6, 8, 4, 5],
[4, 3, 8, 2, 1, 5, 9, 7, 6],
[5, 6, 7, 9, 4, 8, 2, 1, 3]
];
function isNumInRow(board,num,row){
  //console.log(num);
  for(const element of board[row].values()){
    //console.log(element);
    //console.log(element==num);
    if(element==num)return true;
  }
  return false;
}
function isNumInCol(board,num,col){
  //console.log(num);
  for(const element of board.values()){
    //console.log(element[col]);
    //console.log(element[col]==num);
    if(element[col]==num)return true;
  }
  return false;
}
function isNumInBox(board,num,row,col){
  bxRow = (row - row % 3);
  bxCol = (col - col % 3);
  for(var r=bxRow;r<bxRow+3;r++){
    for(var c=bxCol;c<bxCol+3;c++){
      if(board[r][c]==num)return true;
    }
  }
  return false;
}
function isValid(board,num,row,col){
  var vvalid = !isNumInRow(board,num,row) && !isNumInCol(board,num,col) && !isNumInBox(board,num,row,col);
  console.log("n"+num+"r"+row+"c"+col+"v"+vvalid);
  return vvalid;
}
function printBoard(board){
  for(var r=0;r<9;r++){
    linha="";
    for(var c=0;c<9;c++){
      linha+=board[r][c]+" ";
    }
    console.log(linha);
  }
}
function solver(board){
  for(var row=0;row<9;row++){
    for(var col=0;col<9;col++){
      console.log("r"+row+"c"+col+ " "+board[row][col]);
      if(board[row][col]==0){
        for(var num=1;num<10;
        num++){
          if(isValid(board,num,row,col)){
            board[row][col]=num;
            if(solver(board)){
              return true;
            }else{
              board[row][col]=0;
            }
          }
        }
      }
    }console.log("x");
  }console.log("y");
  return false;
}

printBoard(board);
num=1;
row=6;
col=4;
//console.log(isNumInRow(board,num,row));
//console.log(isNumInCol(board,num,col));
//console.log(isNumInBox(board,num,row,col));
//console.log(isValid(board,num,row,col));

console.log(solver(board));

printBoard(board);