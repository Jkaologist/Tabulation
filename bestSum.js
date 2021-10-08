/**
  *  function with input(s): target val and nums array
  *  output(s): best
  */
const bestSum = (tar, nums) => {
  const table = Array(tar + 1).fill(null)
  table[0] = []
  for (let i = 0; i < table.length; i++) {
    if (table[i] !== null) {
      for (let num of nums) {
        if (table[i + num] <= tar) {
          if (table[i + num] === null || [...table[i], num].length < table[i + num].length) {
            table[i + num] = [...table[i], num]
          }
        }
      }
    }
  }
  return table[tar]
}

console.log(bestSum(7, [3,4,5])) // [3,4]
console.log(bestSum(100, [2,4,50])) // [50, 50]
console.log(bestSum(99, [3, 33, 11])) // [33,33,33]