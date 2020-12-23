import fs from 'fs'  // file system need to npm i @types/node

// Load and Parse
const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
}).split('\n')
.map((row: string): string[] => {
  return row.split(',')
})
// [.., [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ],...]

// Analyze
let ManUnitedWinds = 0;
// find: [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    ManUnitedWinds++
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    ManUnitedWinds++
  }
}

// Report
console.log(`Man United won ${ManUnitedWinds} games`)
