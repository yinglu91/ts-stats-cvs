
import fs from 'fs'
import {OuputTarget} from '../Summary'

export class HtmlReport implements OuputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Outpu</h1>
        <div>${report}</div>
      </div>
    `

    fs.writeFileSync('report.html', html)
  }
}