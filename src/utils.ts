export const dateStringToDate = (dateString: string): Date => {
  // '28/20/2018'
  const dateParts = dateString
    .split('/')  // - ['28', '10', '2018']
    .map((value: string): number => {
      return parseInt(value)
    })  // [28, 10, 2018], month: 0 - 11

    return new Date(dateParts[2], dateParts[1]-1, dateParts[0])
}