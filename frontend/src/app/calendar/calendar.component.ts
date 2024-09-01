import { Component, OnInit, Input } from '@angular/core';
import { PrayerService } from '@piPlayer/service/prayer/prayer.service';
import { Timing } from '@piPlayer/service/prayer/models/Timing';
import { faXmark, } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';
import { PrintService } from '../service/printState/print-state.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  daysOfweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  faXmark = faXmark;
  private subscription!: Subscription;
  printMode: boolean = false;
  faPdf = faFilePdf;
  showPdf = false;
  events: Timing[] = [];


  currentMonth: string = new Date().toLocaleString('fr-FR', { month: 'long' });


  currentDate: Date = new Date()
  days: { date: Date, events: Timing[], showEvents: boolean }[] = [];
  selectedDay: number | null = null;
  daysInMonth: number = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();

  constructor(private prayerService: PrayerService,
    private printService: PrintService) { }

  async ngOnInit(): Promise<void> {
    this.currentMonth=this.currentMonth.charAt(0).toUpperCase() + this.currentMonth.slice(1);
    this.subscription = this.printService.printMode$.subscribe(mode => {
      this.printMode = mode;
    });

    console.log(this.events);
    this.currentDate = new Date();
    await this.renderCalendar();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  async prevMonth(): Promise<void> {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.currentMonth = this.currentDate.toLocaleString('fr-FR', { month: 'long' });
    this.currentMonth=this.currentMonth.charAt(0).toUpperCase() + this.currentMonth.slice(1);
    await this.renderCalendar();
  }

  async nextMonth(): Promise<void> {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.currentMonth = this.currentDate.toLocaleString('fr-FR', { month: 'long' });
    this.currentMonth=this.currentMonth.charAt(0).toUpperCase() + this.currentMonth.slice(1);
    await this.renderCalendar();
  }
  toggleEvents(day: any) {
    this.days.forEach(d => d.showEvents = (d === day) ? !day.showEvents : false);
  }
  togglePdf() {
    this.showPdf = !this.showPdf;
    if (this.showPdf) {
      document.body.style.overflow = "hidden";
      this.togglePrintMode();
      this.togglePrintMode();
    } else {
      document.body.style.overflow = "scroll";
      this.printService.setPrintMode(false);
    }
  }
  isSimilarDates(day1: Date) {
    const today = new Date();
    const condition = day1.getMonth() === today.getMonth()
      && day1.getFullYear() === today.getFullYear()
      && day1.getDate() === today.getDate();
    return condition;
  }

  toReadable(readable:string, lang = "fr-FR") {
    // Convert the string to an integer, then multiply by 1000 to get milliseconds
    const timestamp = parseInt(readable, 10) * 1000;
    const formattedDate = new Date(timestamp).toLocaleString(lang, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

  togglePrintMode() {
    this.printService.setPrintMode(!this.printMode);
  }

  printContent() {
    this.printService.setPrintMode(true);
    setTimeout(() => {
      window.print();
      this.printService.setPrintMode(false);
    }, 100);
  }
  async renderCalendar(): Promise<void> {
    // Retrieve all event timings for the current month and year
    this.events = await this.prayerService.allTimings(this.currentDate.getMonth()+1, this.currentDate.getFullYear());
    this.days = [];

    // Iterate through all days in the month
    for (let i = 1; i <= this.daysInMonth; i++) {
        const date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i);

        // Filter events for the current day
        const eventsForDay = this.events.filter(event => {
            const eventDateParts = event.date.gregorian.date.split('-');
            const eventDay = parseInt(eventDateParts[0], 10);
            const eventMonth = parseInt(eventDateParts[1], 10) - 1; // Months are zero-based in JavaScript
            const eventYear = parseInt(eventDateParts[2], 10);
            const eventDate = new Date(eventYear, eventMonth, eventDay);

            return eventDate.toDateString() === date.toDateString();
        });

        // Add the day and its events to the calendar
        this.days.push({ date: date, events: eventsForDay, showEvents: false });
    }

    // Log the calendar days and events for debugging
    console.log("Days:", JSON.stringify(this.days), "Events:", JSON.stringify(this.events));
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
