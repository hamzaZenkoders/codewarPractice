/* 5 kyu: Extract the domain name from a URL

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

 */

function domainName(url){
    
    let temp = url.replace("http://", "").replace("https://", "");
  
    console.log(temp);
  
    temp = temp.split("/");
    
    
    console.log(temp);
    
    temp = temp[0];
    
    
    console.log(temp);
    
    temp = temp.split(".");
    
    
    console.log(temp);
    
    if (temp[0] === 'www') {
       
        return temp[1];
    } else {
      
        return temp[0];
    }
}



console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("http://google.com"));  