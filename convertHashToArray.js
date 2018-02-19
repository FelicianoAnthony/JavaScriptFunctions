function convertHashToArray(hash){
  var zeroIdx = [];
  for (var key in hash) {
    zeroIdx.push(key)
  }
  var sortedZeroIdx = zeroIdx.sort();
  
  var newArr = [];
  
  for (var i=0; i < sortedZeroIdx.length; i++) {
    var objKey = sortedZeroIdx[i];
    newArr.push([objKey, hash[objKey]])
    
  }
  return newArr;
}


var object = {name: 'Jeremy', age: 24, role: 'Software Engineer'}

convertHashToArray(object)
//[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]