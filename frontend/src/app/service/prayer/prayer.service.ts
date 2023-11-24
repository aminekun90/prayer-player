import { Injectable } from '@angular/core';
import { HttpService } from '@piPlayer/service/http/http.service';
import { CONFIG } from '@piPlayer/service/types/types';
import { Prayer } from '@piPlayer/service/prayer/models/prayer';
import { Settings } from '@piPlayer/types/types';

@Injectable({
  providedIn: 'root'
})
export class PrayerService {

  constructor(private httpService: HttpService) {
    console.log("Prayer service initialized");
  }
  async getAzanList(){
    const azanList = await this.httpService.get(`${CONFIG.getAzanList}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if(azanList.status){
      return azanList.result;
    }
  }
  async getPrayers() {
    const prayers = await this.httpService.get(`${CONFIG.getPrayers}`, {
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
  async getSettings(){
    const settingsResp = await this.httpService.get(`${CONFIG.getSettings}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if(settingsResp.status){
      return settingsResp.result;
    }
  }
  async saveSetting(settings: Settings) {
    const response = await this.httpService.post(CONFIG.saveSettings, settings, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response) {
      console.log("settings saved", response);
    }
  }
}
