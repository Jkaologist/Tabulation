/**
 *  function with input(s): tar, and an array of nums
 *  output(s): a way to make tar
 */
const howSum = (tar, nums) => {
  const table = Array(tar + 1).fill(null)
  table[0] = []
  for (let i = 0; i < table.length; i++) {
    if (table[i] !== null) {
      for (let num of nums)
        if (table[i + num] < table.length) {
          table[i+num] = [...table[i], num]
        }
    }
  }
  return table[tar]
}

console.log(howSum(7, [3,4,5])) // [3,4]
console.log(howSum(100, [2,4,50]))
/**
[
  2,  4, 4, 4, 4, 4,
  4,  4, 4, 4, 4, 4,
  4, 50
] */
console.log(howSum(300, [7,14])) // null
