function redarr(arr) {


  // remove nesting 
  var deNested = [];
  
  for (var i=0; i < arr.length; i++ ){
    if (Array.isArray(arr[i])) {
      for (var j=0; j < arr[i].length; j++) {
        deNested.push(arr[i][j]);
      }
    } else {
      deNested.push(arr[i])
    }
  }
  

  // sort & remove duplicates 
  var deNestedSorted = deNested.sort();
  var noDupes = [];

  for  (var k=0; k < deNestedSorted.length; k++) {
    var listElement = deNestedSorted[k];
    var idxOf = deNestedSorted.indexOf(listElement);
    var lastIdxOf = deNestedSorted.lastIndexOf(listElement);
    //console.log('index of > ',  idxOf, 'last index of > ', lastIdxOf, 'word ', listElement);
    if (idxOf < lastIdxOf) {
      if (noDupes.indexOf(listElement) === -1) {
        noDupes.push(listElement);
      }
    } else {
      noDupes.push(listElement);
    }
  }
  

  // turn into object 
  var obj = {};
  
  for (var m=0; m < noDupes.length; m++) {
    var keys = m.toString();
    obj[keys] = noDupes[m];
  }
  
  return obj;

}

var arr = [[ 'Sky Sport', 'ITV', 'Channel 4', 'Discovery', 'MTV', 'CNBC', 'Bloomberg TV', 'Film 4', 'Discovery', 'Sky Sport',
  'CNN', 'CNBC', 'National Geographic', 'Bloomberg TV', 'BBC1' ], [ 'Bloomberg TV' ], [ 'CNBC' ], [ 'Discovery' ], [ 'Sky Sport' ]];



redarr(arr)
// returns this...

// { 0: 'BBC1',
//   1: 'Bloomberg TV',
//   2: 'CNBC',
//   3: 'CNN',
//   4: 'Channel 4',
//   5: 'Discovery',
//   6: 'Film 4',
//   7: 'ITV',
//   8: 'MTV',
//   9: 'National Geographic',
//   10: 'Sky Sport' }