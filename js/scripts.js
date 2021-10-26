// Business Logic

function wordCounter(text) {
   if (text.trim().length === 0) {
     return 0;
   }
   console.log(text);
  let wordCount = 0;
  const wordArray = text.split (" ");
  wordArray.forEach(function(kitten) {
    if (!Number(kitten)) {
    wordCount++;
    }
  })
  return wordCount;
}

function numberOfOccurancesInText(word, text) {
  if (text.trim().length===0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
   if (element.toLowerCase().includes(word.toLowerCase()))
       {
     wordCount++
   }
   });
   return wordCount;
  }

console.log (numberOfOccurancesInText("Hello", "hello. hello Hello HELLO$ hellO."))


