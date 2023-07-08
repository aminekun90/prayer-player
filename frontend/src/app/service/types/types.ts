export const CONFIG = {
  apiURL:"http://localHost:8000/",
  getSoCoDevice:"devices",
  getPrayers:"timings",
}

export interface PrayerTimeObject {
  [prayer: string]: Date;
}
