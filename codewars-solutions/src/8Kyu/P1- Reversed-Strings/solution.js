/* 
8 kyu: Reversed Strings


Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'


LINK TO THE PROBLEM: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
 */

function solution(str){
  
    const wordsArr = str.split("");
    
     let rightCounter = wordsArr.length-1;
    
    for(let i=0;i<wordsArr.length;i++){
      
       if(i<rightCounter){
         let temp = wordsArr[i];
         wordsArr[i] = wordsArr[rightCounter];
         wordsArr[rightCounter] = temp;
         
         rightCounter--;
       }
    }
    
    const reversedString = wordsArr.join("");
    return reversedString;
  }


  console.log(solution("world"));