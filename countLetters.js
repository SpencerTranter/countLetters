var args = process.argv.slice(2);

function countLetters(args){
  var splitWordArray = args[0].split('');
  var finalArray = createFinalArray(splitWordArray);
  var objectString = createObjectString(finalArray);

}

function createFinalArray(wordArray){
  var countArray = letterCount(wordArray);
  var finalArray = [];

  for(var i = 0; i < wordArray.length; i++) {
    count = 0;

    for(var x = 0; x < wordArray.length; x++) {
      if(wordArray[i] === wordArray[x]){
        count ++;
      }
    }
    if (count === 1){
      finalArray.push(wordArray[i]);
      finalArray.push(countArray[i]);
    } else {
      wordArray[i] = null;
      countArray[i] = null;
    }
  }
  console.log(finalArray);
  return finalArray;
}

function createObjectString(finalArray){
  objectString = '';
  for(var i = 0; i < finalArray.length; i ++) {
    if(i === finalArray.length - 1) {
      objectString += finalArray[i];
    } else if(i % 2 === 0) {
      objectString += finalArray[i] + ': ';
    } else {
      objectString += finalArray[i] + ', '
    }
  }
  console.log(objectString);
  return objectString;
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


// function findUnique(wordArray) {
//   var uniqueArray = [];

//   for(var i = 0; i < wordArray.length; i++) {
//     count = 0;

//     for(var x = 0; x < wordArray.length; x++) {
//       if(wordArray[i] === wordArray[x]){
//         count ++;
//       }
//     }

//     if (count === 1){
//       uniqueArray.push(wordArray[i]);
//     } else {
//       wordArray[i] = null;
//     }
//   }
//   console.log(uniqueArray);
//   return uniqueArray;
// }

countLetters(args);





