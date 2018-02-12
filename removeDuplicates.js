function removeDuplicates(arr) {
  
  var dupes = [];
  var nonDupes = [];
  
  for  (var i=0; i < arr.length; i++) {
    var listElement = arr[i];
    var idxOf = arr.indexOf(listElement);
    var lastIdxOf = arr.lastIndexOf(listElement);
    //console.log('index of > ',  idxOf, 'last index of > ', lastIdxOf, 'word ', listElement);
    if (idxOf < lastIdxOf) {
      if (dupes.indexOf(listElement) === -1) {
        dupes.push(listElement);
      }
    } else {
      nonDupes.push(listElement)
    }
  }
  return dupes.concat(nonDupes)
}


var arr = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'e', 'f']
// a/b/c are each repeated twice

console.log(removeDuplicates(arr))