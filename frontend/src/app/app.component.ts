import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'frontend';
  devices: Device[] = [];
  prayers: Prayer[] = [];
  azanList: string[] = [];
  currentTime: Date = new Date();
  settings: any = {
    api: {
      city: '',
      country: '',
      selectedMethod: '',
      forceDate: null, // or initialize it with a default date if needed
    },
    device: {
      volume: 50 // or initialize with a default volume
    },
    playlist: {
      fileName: ''
    },
    enableScheduler:false
  };
  country: string = "";
  city: string = "";
  volume: number = 25;
  calcMethod: string = '';
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  version = VERSION;

  constructor(private soCoService: SoCoService, private prayerService: PrayerService) {


  }
  async ngOnInit() {
    this.setTimeEverySecond()
    await this.soCoService.getSoCoDevices().then(devices => {
      this.devices = devices;
    });
    await this.prayerService.getPrayers().then(prayers => {
      this.prayers = prayers;
    });
    await this.prayerService.getAzanList().then(list => {
      this.azanList = list;
    });
    await this.getSettings();
  }
  onMp3FileChange() {
    const audio: HTMLAudioElement = this.audioPlayer?.nativeElement;
    if (audio) {
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

  async saveSettings() {
    console.log("Setting saving...");
    this.settings.api.selectedMethod = parseInt(this.settings.api.selectedMethod)
    await this.prayerService.saveSetting(this.settings)
  }
  async getSettings() {
    console.log("Setting loading...");
    this.settings = await this.prayerService.getSettings()
    console.log("Loaded settings", this.settings);
  }
}
