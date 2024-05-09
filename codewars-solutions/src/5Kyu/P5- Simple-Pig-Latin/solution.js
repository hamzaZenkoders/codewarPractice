/* 5 kyu: Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

 */


function pigIt(str){
    let temp = str.split(" "); 
    let tempArray = [];
    
    for(let i = 0; i < temp.length; i++){
        let word = temp[i];
        if (/^[A-Za-z]+$/.test(word)) {
            let firstCharacter = word.charAt(0);
            let restWords = word.slice(1);
            let answer = restWords + firstCharacter + "ay";
            tempArray.push(answer);
        } else {
           
            tempArray.push(word);
        }
    }
    
    let answer = tempArray.join(" ");
    return answer;
}


console.log(pigIt('Pig latin is cool'));

 console.log(pigIt('Pig latin is cool'));