export class Prayer {
  private prayerName: string = "";
  private time: Date = new Date();
  getTime(){
    return this.time;
  }
  getName(){
    return this.prayerName;
  }
  static fromJson(jsonObj: any): Prayer {
    let prayer = new Prayer();
    prayer.prayerName = jsonObj.prayerName;
    prayer.time = parseTime(jsonObj.time);
    return prayer;
  }
}

function parseTime(timeString: string): Date {
  const timeParts = timeString.split(' ')[0].split(':');
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);

  const currentDate = new Date();
  currentDate.setHours(hours, minutes, 0, 0);

  return currentDate;
}
