/* 7 kyu: Sum it continuously


Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.

For example:

add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like 
this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5] 

https://www.codewars.com/kata/59b44d00bf10a439dd00006f/train/javascript

*/


function add(arr) {
  
    let summedArr=[];
    
    summedArr[0] = arr[0];
    
    for(let i=1;i<arr.length;i++){
      summedArr[i] = summedArr[i-1]+arr[i];
    }
    
    return summedArr;
  }
  
const result =add([1,2,3,4,5]); 
console.log(result);
