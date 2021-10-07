// o(mn) TC o(mn) SC
const gridTraveler = (m, n) => {
  const table = Array(m + 1).fill().map(() => Array(n+1))
  console.log(table)
}
// gridTraveler(1,1) = 1
console.log(gridTraveler(3,3)) //6