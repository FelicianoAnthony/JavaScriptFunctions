//https://www.codewars.com/kata/sum-of-a-nested-list/train/javascript

function sumNested(arr) {
  
  var sum = 0;
  
  for (var i=0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum+=sumNested(arr[i]);
    } else {
      sum+=arr[i];
    }
  }
  return sum;
}


var arr = [1, [2, [3, [4]]]]
sumNested(arr)
//10