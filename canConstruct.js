/**
  *  function with input(s): 
  *  output(s): 
  */
const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false)
  table[0] = true
  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        if (word === target.slice(i, i + word.length)) {
          if (i + word.length < table.length) {
            table[i + word.length] = true
          }
        }
      }
    }
  }
  return table[target.length]
}

console.log(canConstruct("skateboard", ["sk", "ate","te", "sk","boar", "boa", "d", "rd"])) // true
console.log(canConstruct("abcdef", ["ab", "abc","abcd", "e","ef", "bcd", "def"])) // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee","eee", "eeee","eeeee"])) // false