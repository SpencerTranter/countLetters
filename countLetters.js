function countLetters(word){
  var splitWordArray = word.split('');
  var countArray = letterCount(splitWordArray);
}

function letterCount(wordArray){
  var countArray = [];
  for(var i = 0; i < wordArray.length; i++){
    count = 0;
    for(var x = 0; x < wordArray.length; x++){
      if(wordArray[i] === wordArray[x]){
        count ++;
      }
    }
    countArray.push(count);
  }
  console.log(countArray);
  return countArray;
}

countLetters('hello');





