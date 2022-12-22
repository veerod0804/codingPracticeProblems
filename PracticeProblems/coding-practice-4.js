// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
// If there are two or more words that are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

let sentence = "this is a sample word sentence."


// senArray = ["this", "is", "a", "sample", "word", "sentence"]

function LongestWord(sen) { 
    let sentenceArray = sentence.split(" ");
    let longWord = sentenceArray[0];
    
    for (let i = 0; i < sentenceArray.length; i++) {
        if (sentenceArray[i].length > longWord.length) {
            longWord = sentenceArray[i];
        }

        }
        return longWord;
    }
    // code goes here  
console.log(LongestWord(sentence));
  
  // keep this function call here 
//   console.log(LongestWord(readline()));
