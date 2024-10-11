import moment from "moment"

class DateTimeService {

  formatIsoDateStr(date: string): string {
    return moment(date, 'YYYY-MM-DD ').format('L')
  }

  timestampToDate(timestamp: number): Date {
    return new Date(timestamp * 1000)
  }

}

export const dateTimeService = new DateTimeService()