import { Component } from '@angular/core';
import { SoCoService } from '@piPlayer/service/soCo/so-co.service';
import { Device } from '@piPlayer/service/soCo/models/device';
import { PrayerService } from '@piPlayer/service/prayer/prayer.service';
import { Prayer } from '@piPlayer/service/prayer/models/prayer';
import { VERSION } from './env';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  devices: Device[] = [];
  prayers: Prayer[] = [];
  currentTime:Date=new Date();
  version=VERSION;

  constructor(private soCoService: SoCoService, private prayerService: PrayerService) {
    this.setTimeEverySecond()
    this.soCoService.getSoCoDevices().then(devices => {
      this.devices = devices;
    });
    this.prayerService.getPrayers().then(prayers => {
      this.prayers = prayers;
    });

  }
  getCurrentPrayer() {
    return this.prayers.find(p => p.getTime() >= new Date())
  }
  setTimeEverySecond() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
  saveSettings(){
    console.log("Setting saving...");
  }
}
