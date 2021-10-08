/**
  *  function with input(s): target word and a word bank array
  *  output(s): numWays
  */
 // o(m^2n) TC o(m) SC
const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0)
  table[0] = 1
  for (let i = 0; i < table.length; i++) {
    if (table[i] > 0) {
      for (let word of wordBank) {
        if (word === target.slice(i, i + word.length)) {
          if (table[i + word.length] < table.length) {
            table[i + word.length] = table[i] + table[i+word.length]
          }
        }
      }
    }
  }
  return table[target.length]
}

console.log(countConstruct("skateboard", ["sk", "ate","te", "sk","boar", "boa", "d", "rd"])) // 4
console.log(countConstruct("abcdef", ["ab", "abc","abcd", "e","ef", "bcd", "def"])) // 2
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee","eee", "eeee","eeeee"])) // 0