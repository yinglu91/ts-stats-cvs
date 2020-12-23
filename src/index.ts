
import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'

const reader = new MatchReader('./football.csv')
reader.read()

console.log(reader.data[0])
//  [
//      2018-08-10T04:00:00.000Z,
//      'Man United',
//      'Leicester',
//      2,
//      1,
//      'H',
//      'A Marriner'
//    ]

// Analyze
let ManUnitedWinds = 0;
// find: [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    ManUnitedWinds++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    ManUnitedWinds++
  }
}

// Report
console.log(`Man United won ${ManUnitedWinds} games`)

// Man United won 18 games
