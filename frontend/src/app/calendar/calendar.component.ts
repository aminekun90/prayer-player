import { Component, OnInit, Input } from '@angular/core';
import { PrayerService } from '@piPlayer/service/prayer/prayer.service';
import { Timing } from '@piPlayer/service/prayer/models/Timing';
import { faXmark, } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
   daysOfweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  faXmark = faXmark;
  events: Timing[] = [];
  currentMonth: string = new Date().toLocaleString('default', { month: 'long' });
  currentDate: Date = new Date()
  days: { date: Date, events: Timing[], showEvents: boolean }[] = [];
  selectedDay: number | null = null;
  daysInMonth: number = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();

  constructor(private prayerService: PrayerService) { }

  async ngOnInit(): Promise<void> {
    this.events = await this.prayerService.allTimings();
    console.log(this.events);
    this.currentDate = new Date();
    this.renderCalendar();
  }

  prevMonth(currentDate: Date): void {
    currentDate.setMonth(currentDate.getMonth() - 1);
    this.renderCalendar();
  }

  nextMonth(currentDate: Date): void {
    currentDate.setMonth(currentDate.getMonth() + 1);
    this.renderCalendar();
  }
  toggleEvents(day: any) {
    this.days.forEach(d => d.showEvents = (d === day) ? !day.showEvents : false);
  }
  renderCalendar(): void {
    this.days = [];
    for (let i = 1; i <= this.daysInMonth; i++) {
      const date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i);
      const eventsForDay = this.events.filter(event => {
        const eventDateParts = event.date.gregorian.date.split('-');
        const eventYear = parseInt(eventDateParts[2], 10);
        const eventMonth = parseInt(eventDateParts[1], 10) - 1; // Months are zero-based in JavaScript
        const eventDay = parseInt(eventDateParts[0], 10);
        const eventDate = new Date(eventYear, eventMonth, eventDay);

        return eventDate.toDateString() === date.toDateString();
      });
      this.days.push({ date: date, events: eventsForDay, showEvents: false });
    }
    console.log("Days:", this.days)
  }
  selectDay(day: number): void {
    if (this.selectedDay === day) {
      this.selectedDay = null; // Deselect if already selected
    } else {
      this.selectedDay = day; // Select the clicked day
    }
  }

  getEventsForDay(day: number): string[] {
    // Implement this method to retrieve events for the selected day
    // You can replace this with your actual logic to fetch events
    return ['Event 1', 'Event 2']; // Example events for demonstration
  }
}
