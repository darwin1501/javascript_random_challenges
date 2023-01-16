/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

function panic (str) {
  //split string
  const string = str.toUpperCase().split(' ')
  const emoji = ' 😱 '
  let newString = ''

  //if string length is
  // greater than 1 this is word
  if (string.length > 1) {
    newString = `${string.join(emoji)}!`
    // else sentence/phrase
  } else {
    newString = `${string.join()}!`
  }

  return newString
}

// panic("coffee")
// Test your function
console.log(panic("I'm almost out of coffee"))
console.log(panic('coffee'))
// console.log(panic('winter is coming'))
