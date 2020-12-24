
import { MatchReader } from './MatchReader'
import {CsvFileReader} from './CsvFileReader'
import {ConsoleReport} from './reportTargets/ConsoleReport'
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import { Summary } from './Summary'
import {HtmlReport} from './reportTargets/HtmlReport'

// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass in something satifiying the DataReader interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

// Analyze & Report
const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())
summary.buildAndPrintReport(matchReader.matches)

// Team Man United won 18 games

const summary2 = new Summary(new WinsAnalysis('Man United'), new HtmlReport())
summary2.buildAndPrintReport(matchReader.matches)

// report.html:
// <div>
// <h1>Analysis Outpu</h1>
// <div>Team Man United won 18 games</div>
// </div>
