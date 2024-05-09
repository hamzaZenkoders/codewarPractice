/* 
4 kyu: Snail


Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]


LINK TO THE PROBLEM: https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript */



snail = function(A) {

    let rowBegin = 0;
    let colBegin = 0;
    let rowEnd = A.length-1;
    let colEnd = A[0].length-1;

    let result =[];
  
      while(rowBegin<=rowEnd && colBegin<=colEnd){

        
          //Traversing right
          for(let i=colBegin;i<=colEnd;i++){
             // console.log(A[rowBegin][i]);
            
            result.push(A[rowBegin][i]);
          }
          rowBegin++;

          //traversing down
          for(let i=rowBegin;i<=rowEnd;i++){
              //console.log(A[i][colEnd]);
             result.push(A[i][colEnd]);
          }
          colEnd--;

          //traverse left
          if(rowBegin<=rowEnd){
              for(let i=colEnd;i>=colBegin;i--){
                //  console.log(A[rowEnd][i]);
                result.push(A[rowEnd][i]);
              }
              rowEnd--;
          }

          //traverse up
          if(colBegin <= colEnd){
              for(let i=rowEnd;i>=rowBegin;i--){
                  //console.log(A[i][colBegin]);
                result.push(A[i][colBegin]);
              }
              colBegin++;
          }



      }

   return result;
}

let test1 = snail([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25],
    [26,27,28,29,30]  
              ]);


 console.log(test1);
 
 
 let test2 =  snail(
    [[1,2,3],
    [4,5,6],
    [7,8,9]]);

console.log(test2);