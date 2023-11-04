export const CONFIG = {
  apiURL:"http://localHost:8000/",
  getSoCoDevice:"devices",
  getPrayers:"timings",
  getAzanList:"azanList"
}

export interface PrayerTimeObject {
  [prayer: string]: Date;
}
