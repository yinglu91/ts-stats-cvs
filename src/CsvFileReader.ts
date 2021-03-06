import fs from 'fs'  // file system need to npm i @types/node

export class CsvFileReader {
  data: string[][] = []

  constructor(public filename: string) {}

  // Load and Parse
  // [.., [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ],...]
  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',')
    })
  }
}