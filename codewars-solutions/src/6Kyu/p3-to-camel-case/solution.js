

function toCamelCase(str){
    let temp;
    
    if(str.includes("-")){
      temp = str.split("-");
     
    }else if(str.includes("_")){
       temp = str.split("_");
    }
   
   for(let i=1;i<temp.length;i++){
   const firstLetter = temp[i].charAt(0)
  
  const firstLetterCap = firstLetter.toUpperCase()
  
  const remainingLetters = temp[i].slice(1)
  
  const capitalizedWord = firstLetterCap + remainingLetters
       
       temp[i] = capitalizedWord;
   } 
    
    let result = temp.join("");
    
    return result;
  }
  
  
  console.log(toCamelCase("the-stealth-warrior"));
  console.log(toCamelCase("The_Stealth_Warrior"));
  console.log(toCamelCase("The_Stealth-Warrior"));