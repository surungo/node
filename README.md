var os = require('os');

console.log(os.hostname());
console.log(os.platform());

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
 return !isNumInRow(board,num,row) && !isNumInCol(board,num,col) && !isNumInBox(board,num,row,col);
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
 for(var r=0;r<9;r++){
  linha="";
  for(var c=0;c<9;c++){
   linha+=board[r][c]+" ";
  }
  }
 
  return false;
}

var board = [
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
printBoard(board)
num=1;
row=6;
col=4;
console.log(isNumInRow(board,num,row));
console.log(isNumInCol(board,num,col));
console.log(isNumInBox(board,num,row,col));
console.log(isValid(board,num,row,col));

solver(board);

