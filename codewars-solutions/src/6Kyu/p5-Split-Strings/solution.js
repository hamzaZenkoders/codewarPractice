/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript */

function solution(str){
    if(str.length === 0) return [];
   
     let temp;
     
       temp = str.match(/.{1,2}/g);
      // console.log(temp);
      
  
      
      if(temp[temp.length-1].length%2 !== 0){
         let temp2 = temp[temp.length-1]+ "_";
         temp[temp.length-1] = temp2;
      }
      
      return temp;
   
 }

 console.log(solution("aabbccdd"));
console.log(solution("aabbccd"));