/* 7 kyu: Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

LINK:  https://codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript */



function descendingOrder(n){
  
    const temp = String(n);
    
      if(temp.length<=1){
              return Number(temp);
      }
    
      else
      {
    
      const separatedNum = temp.split("");
    
      const NumArray = separatedNum.map(value=>Number(value));
    
      let result = NumArray.sort().reverse().join("");
       
       // console.log(typeof(result)+ "result: " + result);
         
       return Number(result);
      }
  }


console.log(descendingOrder(42145));
console.log(descendingOrder(0));
console.log(descendingOrder(111));