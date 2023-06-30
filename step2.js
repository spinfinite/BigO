// Step 2: Write Code
// Work through the following problems in Javascript (you have seen these problems before). Create a new file for your code. When you have finished with each function, leave a code comment with what you believe the runtime of your code to be.

// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

const addToZero = (arr) => {
    
    for(x = 0; x < arr.length; x++){
        //console.log(arr[x]) // test 
        for(y = 0; y < arr.length; y++){
            //console.log(arr[x])
            if(x !== y) {
                if(arr[x] + arr[y] === 0){
                    return true
                }
            }
        }


    }

}

// For example:

//console.log(addToZero([]))
// // -> False

//console.log(addToZero([1]))
// // -> False

//console.log(addToZero([1, 2, 3]))
// // -> False

// console.log(addToZero([1, 2, 3, -2]))
// // -> True
//Answer:  Runtime O(n^2) nested for loops mainly  
//         Space: O(n) 


// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let x = 0; x < word.length; x++) {
      uniqueChars.add(word[x])
    }
    return uniqueChars.size === word.length
  }

// For example:

// console.log(hasUniqueChars("Monday"))
// // // -> True

// console.log(hasUniqueChars("Moonday"))
// // -> False

//answer:  Runtime:  O(n)
//         Space:    O(1)

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const isPangram = (sentence) => {
    let newSentence = sentence.toLowerCase()
    //console.log(newSentence)
    let splitNewSentence = newSentence.split("")
    //console.log(splitNewSentence)
    let checkArray = []
    for(x = 0; x<splitNewSentence.length; x++){
        for(y = 0; y<alphabet.length; y++){
            if(splitNewSentence[x]===alphabet[y]){
                checkArray[y] = splitNewSentence[x]
                
            }
            
        }

    }
    // console.log(checkArray)
    // console.log(alphabet)

    if(checkArray.length === alphabet.length){
        console.log(True)
    } else 
        console.log(False)
}
isPangram("The quick brown fox jumps over the lazy dog!")
// // -> True

isPangram("I like cats, but not mice");
// // -> False
//answer:  Runtime:  O(n^2)
//         Space:    O(1)

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
let highWord = []
const findLongestWord = (arrayOfWords) => {
    for(z = 0; z < arrayOfWords.length; z++){
        for(w = 1; w < arrayOfWords.length; w++){
            if (arrayOfWords.length[z]>arrayOfWords.length[w]){
                highWord = arrayOfWords[z]
                //console.log(highWord.length)
            } else {
                highWord = arrayOfWords[w]
                //console.log(highWord.length)
            }
            
        }
    }
    console.log(highWord.length)
}

// For example:

// findLongestWord(["hi", "hello"])
// // -> 5

//answer:  Runtime: O(n^2)
//         Space:   O(n)

// Be sure to add this file to your Github repo for this project.

// Extra Credit
// List out the space complexity of each solution in Step 2.