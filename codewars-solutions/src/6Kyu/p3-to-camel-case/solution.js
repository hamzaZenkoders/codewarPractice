/* 
6 kyu: Convert string to camel case



Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the 
original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"


LINK TO THE PROBLEM: https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript


 */


  function toCamelCase(str) {
    let temp = str.includes("-") ? str.split("-") : str.split("_");

    while (str.includes("-") || str.includes("_")) {
        if (str.includes("-")) {
            temp = str.split("-");
        } else if (str.includes("_")) {
            temp = str.split("_");
        }

        for (let i = 1; i < temp.length; i++) {
            const firstLetter = temp[i].charAt(0);
            const firstLetterCap = firstLetter.toUpperCase();
            const remainingLetters = temp[i].slice(1);
            const capitalizedWord = firstLetterCap + remainingLetters;
            temp[i] = capitalizedWord;
        }

        str = temp.join("");
    }

    return temp.join("");
}

console.log(toCamelCase("the-stealth-warrior")); 
console.log(toCamelCase("The_Stealth_Warrior")); 
console.log(toCamelCase("The_Stealth-Warrior")); 
