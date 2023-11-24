import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Settings } from '@piPlayer/types/types';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent  implements OnInit {
  @Input() settings!: Settings;
  @Input() azanList!: Array<string>;
  @Output() onSave = new EventEmitter<Settings>();
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  @Input() isVisible?:boolean;
  @Output() isVisibleChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() devices: Array<any> = [];
  constructor(){}
  async ngOnInit() {
    console.log("setting loaded")
  }

  modalToggle() {
    this.isVisibleChange.emit();
  }

  async saveSettings() {
    this.onSave.emit(this.settings);
  }

  onMp3FileChange() {
    const audio: HTMLAudioElement = this.audioPlayer?.nativeElement;
    if (audio) {
      audio.pause();
      audio.load();
      audio.play();
    }
  }
}
