import { CsvFileReader } from './CsvFileReader'
import { dateStringToDate } from '../utils'
import { MatchResult } from '../MatchResult'

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // 'H', 'A' or 'D',  assertion, we know what it is, trust us!!
      row[6]
    ]
  }
}

//  [
//      2018-08-10T04:00:00.000Z,
//      'Man United',
//      'Leicester',
//      2,
//      1,
//      'H',
//      'A Marriner'
//    ]