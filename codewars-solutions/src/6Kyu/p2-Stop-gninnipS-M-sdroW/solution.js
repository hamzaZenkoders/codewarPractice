/* 6 kyu: Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"

LINK: https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript */

function spinWords(string) {
    const tempArray = string.split(" ");
    
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].length >= 5) {
            let temp = tempArray[i].split("").reverse().join("");
            tempArray[i] = temp;
        }
    }
    
    const finalAnswer = tempArray.join(" ");
    
    return finalAnswer;
}

console.log(spinWords("Hey fellow warriors"));
