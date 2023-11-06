import { Component, ViewChild, ElementRef } from '@angular/core';
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
  azanList: string[] = [];
  currentTime:Date=new Date();
  settings:any = {};
  selectedMp3File: string = '';
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  version=VERSION;

  constructor(private soCoService: SoCoService, private prayerService: PrayerService) {
    this.setTimeEverySecond()
    this.soCoService.getSoCoDevices().then(devices => {
      this.devices = devices;
    });
    this.prayerService.getPrayers().then(prayers => {
      this.prayers = prayers;
    });
    this.prayerService.getAzanList().then(list => {
      this.azanList = list;
      console.log(this.azanList)
    });
    this.getSettings();

  }
  onMp3FileChange() {
    const audio: HTMLAudioElement = this.audioPlayer?.nativeElement;
    if(audio){
      audio.pause();
      audio.load();
      audio.play();
    }
  }
  getCurrentPrayer() {
    return this.prayers.find(p => p.getTime() >= new Date())
  }

  setTimeEverySecond() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  async saveSettings(){
    console.log("Setting saving...");
    await this.prayerService.saveSetting({azan:this.selectedMp3File})
  }
  async getSettings(){
    console.log("Setting loading...");
    this.settings = await this.prayerService.getSettings()
    this.selectedMp3File = this.settings?.playlist?.fileName;
    console.log(this.settings);
  }
}
