var args = process.argv.slice(2);

function countLetters(args){
  var splitWordArray = args[0].split('');
  var countArray = letterCount(splitWordArray);
  var uniqueArray = findUnique(splitWordArray);

  // var countObject = {
  //   row: function(splitWordArray, countArray) {

  //   }
  // }
}

function letterCount(wordArray) {
  var countArray = [];

  for(var i = 0; i < wordArray.length; i++) {
    count = 0;

    for(var x = 0; x < wordArray.length; x++) {
      if(wordArray[i] === wordArray[x]) {
        count ++;
      }
    }
    countArray.push(count);
  }
  console.log(countArray);
  return countArray;
}

function findUnique(wordArray) {
  var uniqueArray = []

  for(var i = 0; i < wordArray.length; i++) {
    count = 0;

    for(var x = 0; x < wordArray.length; x++) {
      if(wordArray[i] === wordArray[x]){
        count ++;
      }
    }

    if (count === 1){
      uniqueArray.push(wordArray[i]);
    } else {
      wordArray[i] = null;
    }
  }
  console.log(uniqueArray);
}


countLetters(args);





