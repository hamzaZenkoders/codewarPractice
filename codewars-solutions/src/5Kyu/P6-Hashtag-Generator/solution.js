
/*
5 kyu :The Hashtag Generator

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/



function generateHashtag (str) {
  
    if (str.trim() === '') {
        return false; // Or any other action you want to take for an empty string
    }
  
    let temp = str.split(" ");
    let temp2 = [];
 
  for(let i=0;i<temp.length;i++){
    let hold = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
    temp2.push(hold);
    
    //console.log(hold);
    
  }
  temp2.unshift("#");

  //  console.log(temp2);
     
 let result = temp2.join("");
 
    if (result.length > 140) {
        return false; 
    }else{
      return result;
    }

//console.log(result);
  
}
