/*
In this Kata, you will be given a string and two indexes. 
Your task is to reverse the portion of that string between those two indices inclusive.

solve("codewars",1,5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa". So we reverse them.
solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.

*/


function solve(st,a,b){

  let rev = "";
  
  for (let i=st.length-1; i >= 0; i--) {
    if (i >= a && i <= b ) {
      rev += st[i]
    }
  }
  
  let stem = st.slice(0,a) + rev
  return stem + st.slice(stem.length, st.length)
  
}
  