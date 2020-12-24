
import { MatchData } from './MatchData'
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import {HtmlReport} from './reportTargets/HtmlReport'

export interface Analyzer {
  run(metches: MatchData[]): string;
}

export interface OuputTarget {
  print(report: string): void;
}

// composition
export class Summary {
  static winsAnalysisWithHtmlreport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport())
  }

  constructor(public analyzer: Analyzer, public ouputTarget: OuputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.ouputTarget.print(output)
  }
}

// new Summary(new WinsAnalysis(), new ConsoleReport())