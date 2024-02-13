import { Injectable } from '@angular/core';
import { HttpService } from '@piPlayer/service/http/http.service';
import { Device } from '@piPlayer/service/soCo/models/device';
import { CONFIG } from '@piPlayer/service/types/types';



@Injectable({
  providedIn: 'root'
})
export class SoCoService {

  constructor(private httpService: HttpService) {
    console.log("Soco service initialized");
  }
  private parseJsonStr(value: any) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
  async getBleDevices() {
    const result = await this.httpService.get(`${CONFIG.getBleDevices}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("BLE", result)
    if (result?.success && result?.devices) {
      const devices = result.devices
      return this.parseJsonStr(devices);
    } else { return []; }
  }
  async getSoCoDevices() {
    const result = await this.httpService.get(`${CONFIG.getSoCoDevice}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (result.success && result.devices) {
      const devices = result.devices;
      return (this.parseJsonStr(devices) as Array<any>).map(device => Device.fromJson(device));
    } else { return []; }
  }
  async playEsterEgg() {
    const result = await this.httpService.get(`${CONFIG.playEsterEgg}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (result) {
      return result;
    }
    return [];
  }
}
