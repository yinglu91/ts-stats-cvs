
import { MatchReader } from './MatchReader'
import {CsvFileReader} from './CsvFileReader'
import {ConsoleReport} from './reportTargets/ConsoleReport'
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import { Summary } from './Summary'

// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass in something satifiying the DataReader interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

// Analyze & Report
const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())
summary.buildAndPrintReport(matchReader.matches)

// Team Man United won 18 games



// Man United won 18 games
