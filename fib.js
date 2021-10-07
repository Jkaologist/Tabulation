// iteratively by building a table
// tabulation is off by 1 because of 0 indexed arrays
// fully iterative complexity
// o(n) TC
// o(n) SC
const fib = (n) => {
  // initialize each position at 0 and then calc running sum
  const table = Array(n + 1).fill(0)
  table[1] = 1
  for (let i = 0; i <= n; i++) {
    let next = i+1
    let nextNext = i+2
    table[next] += table[i]
    table[nextNext] += table[i]
    console.log(table)
  }
  return table[n]
}

console.log(fib(6)) // 8
console.log(fib(50)) // 12586269025