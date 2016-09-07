var args = process.argv.slice(2);

function countLetters(word){
  var splitWord = word.join('').toLowerCase().split('');

  var obj = {};
    for(var i = 0; i < splitWord.length; i++){
      if (!obj.hasOwnProperty(splitWord[i])){
        obj[splitWord[i]] = 1;
      } else {
        obj[splitWord[i]] ++;
      }
    }
  return obj;

}


console.log(countLetters(args));





