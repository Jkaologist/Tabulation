// o(nm) TC o(n) SC
const canSum = (tar, nums) => {
  const table = Array(tar + 1).fill(false)
  table[0] = true
  for (let i = 0; i < table.length; i++) {
    if (table[i] === true) {
      for (let num of nums) {
        if (table[i + num] < table.length) {
          table[i + num] = true
        }
      }
    }
  }
  return table[tar]
}

console.log(canSum(7,[3,4,5])) // true
console.log(canSum(300, [7,14])) // false