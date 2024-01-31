export const CONFIG = {
  apiURL:"http://localHost:8000/",
  getSoCoDevice:"devices",
  getPrayers:"timings",
  getAzanList:"azanList",
  saveSettings:"saveSettings",
  getSettings:"getSettings",
  playEsterEgg:"playEsterEgg",
}

export interface PrayerTimeObject {
  [prayer: string]: Date;
}

