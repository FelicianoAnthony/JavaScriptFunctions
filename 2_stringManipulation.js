/*
Instructions: 
You're given a single word. Your task is to swap the halves. 
If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

Examples;
reverseByCenter("secret")  == "retsec" // no center character
reverseByCenter("agent")   == "nteag"  // center character is "e"
*/


function reverseByCenter(str){
  
  let strLength = str.length;
  let strHalf = strLength / 2;
  
  if (strLength % 2 === 0) {
    let beginningEven = str.slice(0, strHalf);
    let endEven = str.slice(beginningEven.length)
    return endEven + beginningEven
  }
  else {
    let beginningOdd = str.slice(0, Math.floor(strHalf));
    let endOdd = str.slice(beginningOdd.length+1)
    let middleOdd = str[beginningOdd.length]
    return endOdd + middleOdd + beginningOdd
  
  }
}