// o(mn) TC o(mn) SC
const gridTraveler = (m, n) => {
  const table = Array(m+1)
  .fill()
  .map(() => Array(n+1).fill(0))
  table[1][1] = 1
  for (let row = 0; row <= m; row++) {
    for (let col = 0; col <= n; col++) {
      let curr = table[row][col]
      if (row + 1 <= m) table[row + 1][col] += curr
      if (col + 1 <= n) table[row][col + 1] += curr
    }
  }
  return table[m][n]
}

console.log(gridTraveler(3,3)) //6