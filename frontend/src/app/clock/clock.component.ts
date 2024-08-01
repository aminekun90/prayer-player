import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PrintService } from '../service/printState/print-state.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
})
export class ClockComponent implements OnInit {
  currentTime: string = '';

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  }
}
