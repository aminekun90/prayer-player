import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { CONFIG } from '@piPlayer/service/types/types';
import { Prayer } from '@piPlayer/service/prayer/models/prayer';

@Injectable({
  providedIn: 'root'
})
export class PrayerService {

  constructor(private httpService: HttpService) {
    console.log("Prayer service initialized");
  }
  async getPrayers() {
    const prayers = await this.httpService.get(`${CONFIG.apiURL}${CONFIG.getPrayers}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (prayers.status) {
      const finalPrayers: Prayer[] = [];
      const prayerData = prayers.result.timings;
      for (const prayerName in prayerData) {
        if (Object.prototype.hasOwnProperty.call(prayerData, prayerName)) {
          const time = prayerData[prayerName];
          const prayer = Prayer.fromJson({ prayerName, time });
          finalPrayers.push(prayer);
        }
      }
      return finalPrayers.sort((a, b) => a.getTime().getTime() - b.getTime().getTime());;
    }
    return [];
  }
}
