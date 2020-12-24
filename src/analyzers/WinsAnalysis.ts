import {Analyzer} from '../Summary'
import {MatchData} from '../MatchData'
import {MatchResult} from '../MatchResult'

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(metches: MatchData[]): string {
    let wins = 0;

    // find: [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
    for (let match of metches) {
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        wins++
      } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        wins++
      }
    }

    return `Team ${this.team} won ${wins} games`
  }
}