import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: '{{ currentTime }}',
})
export class ClockComponent implements OnInit {
  currentTime: string = '';

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  }
}
