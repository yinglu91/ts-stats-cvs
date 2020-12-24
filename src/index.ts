
import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load()

const summary = Summary.winsAnalysisWithHtmlreport('Man United')
summary.buildAndPrintReport(matchReader.matches) 

// report.html:
// <div>
// <h1>Analysis Outpu</h1>
// <div>Team Man United won 18 games</div>
// </div>
