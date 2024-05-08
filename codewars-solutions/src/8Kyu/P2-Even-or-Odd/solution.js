/* 8 kyu:Even or Odd

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers

LINK TO THE PROBLEM : https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

 */

function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
 }


 let result =evenOrOdd(5);

 console.log(result);


 