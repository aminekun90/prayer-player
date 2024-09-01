import { Component, Input } from '@angular/core';
import { faXmark, } from '@fortawesome/free-solid-svg-icons';
import { Notification } from './types';
import { NotificationService } from './service/notification.service';
@Component({
  selector: 'app-notification',
  standalone: false,
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  faXmark = faXmark;
  notification: Notification | null = null;
  display: boolean = false
  constructor(private notificationService: NotificationService) {
  }
  ngOnInit(): void {
    this.notificationService.notification$.subscribe((notification) => {
      this.notification = notification;
      this.display = true;

      // Auto-hide after a few seconds (optional)
      setTimeout(() => this.display = false, notification.timeout);
    });
  }
  close(){
    this.display = false;
  }
}
