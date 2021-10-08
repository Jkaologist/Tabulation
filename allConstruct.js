/**
  *  function with input(s): a target word and a word bank array
  *  output(s): return all ways to build the target word in an array of subarrays
  */
// exponential SC/TC
// ~O(n^m) TC ~O(m^n) SC
const allConstruct = (target, wordBank) => {
  // makes unique arrays at each location
  const table = Array(target.length + 1)
  .fill()
  .map(()=>[])

  table[0] = [[]]

  for (let i = 0; i < table.length; i++) {
    for (let word of wordBank) {
      if (word === target.slice(i, i + word.length)) {
        const newCombination = table[i].map(subArray => [...subArray, word])
        table[i + word.length].push(...newCombination)
      }
    }
  }
  return table[target.length]
}


console.log(allConstruct("skateboard", ["sk", "ate","te","boar", "boa", "d", "rd"]))
// [ [ 'sk', 'ate', 'boa', 'rd' ], [ 'sk', 'ate', 'boar', 'd' ] ]
console.log(allConstruct("abcdef", ["ab", "abc","abcd", "e","ef", "bcd", "def"]))
// [ [ 'abc', 'def' ], [ 'abcd', 'ef' ] ]
console.log(allConstruct("eeeef", ["e", "ee","eee", "eeee","eeeee"]))
// []