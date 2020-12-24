
import { MatchData } from './MatchData'

export interface Analyzer {
  run(metches: MatchData[]): string;
}

export interface OuputTarget {
  print(report: string): void;
}

// composition
export class Summary {
  constructor(public analyzer: Analyzer, public ouputTarget: OuputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.ouputTarget.print(output)
  }
}

// new Summary(new WinsAnalysis(), new ConsoleReport())