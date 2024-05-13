/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


link: https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript


 */


function rot13(message) {
    let temp = message.split("");
  
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].match(/[a-zA-Z]/)) {
            let tempHold = temp[i].charCodeAt(0);
            let updatedValue = tempHold + 13;

            if ((tempHold >= 65 && tempHold <= 90) || (tempHold >= 97 && tempHold <= 122)) {
                if ((tempHold <= 90 && updatedValue > 90) || (tempHold <= 122 && updatedValue > 122)) {
                    updatedValue -= 26; // Wrap around
                }
                temp[i] = String.fromCharCode(updatedValue);
            }
        }
    }
    return temp.join("");
}


