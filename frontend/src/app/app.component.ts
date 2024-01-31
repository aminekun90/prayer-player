import { Component, ViewChild, ElementRef, OnInit, HostListener } from '@angular/core';
import { SoCoService } from '@piPlayer/service/soCo/so-co.service';
import { Device } from '@piPlayer/service/soCo/models/device';
import { PrayerService } from '@piPlayer/service/prayer/prayer.service';
import { Prayer } from '@piPlayer/service/prayer/models/prayer';
import { faCog, faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';


import { VERSION } from './env';
import { Settings } from './types/types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],
  host: {
    '(document:keypress)': 'handleKeyboardEvent($event)'
  }
})
export class AppComponent implements OnInit {
  faCog = faCog;
  faPlay = faPlay;
  faPause = faPause;
  faStop = faStop;
  title = 'frontend';
  isChildVisible = false;
  devices: Device[] = [];
  prayers: Prayer[] = [];
  azanList: string[] = [];
  currentTime: Date = new Date();
  settings: Settings = {
    api: {
      city: '',
      country: '',
      selectedMethod: 12,
      forceDate: new Date(), // or initialize it with a default date if needed
    },
    device: {
      volume: 50 // or initialize with a default volume
    },
    playlist: {
      fileName: ''
    },
    enableScheduler: false,
    calculationMethods: []
  };
  country: string = "";
  city: string = "";
  volume: number = 25;
  calcMethod: string = '';
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  version = VERSION;
  keySquence: Array<string> = [];
  constructor(private soCoService: SoCoService, private prayerService: PrayerService) { }
  areArraysEqual(arr1: any[], arr2: any[]): boolean {
    if (arr1.length !== arr2.length) {
      return false;
    }

    return arr1.every((value, index) => value === arr2[index]);
  }
  @HostListener('window:keydown', ['$event'])
  async handleKeyboardEvent(event: KeyboardEvent) {
    this.keySquence.push(event.key);
    // console.log("Key press", this.keySquence);
    // wow is this an ester egg ;)
    if (this.areArraysEqual(this.keySquence, [
      "ArrowUp",
      "ArrowDown",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight"])) {
      console.log("combo correct")
      this.keySquence = [];
      await this.soCoService.playEsterEgg();
      alert("Discordu!!");

    }

    if (this.keySquence.length > 8 || event.key == "Escape") {

      console.log("Re-init key recognition")

      this.keySquence = [];
    }

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
  modalToggle() {
    this.isChildVisible = true;
    console.log("show settings...", this.isChildVisible)

  }
  getCurrentPrayer() {
    return this.prayers.find(p => p.getTime() >= new Date())
  }

  setTimeEverySecond() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  async saveSettings(settings: Settings) {
    console.log("Setting saving...", settings);
    this.settings = settings;
    this.settings.api.selectedMethod = parseInt(this.settings.api.selectedMethod as unknown as string)
    await this.prayerService.saveSetting(this.settings)
  }
  async getSettings() {
    console.log("Setting loading...");
    this.settings = await this.prayerService.getSettings()
    console.log("Loaded settings", this.settings);
  }
}
