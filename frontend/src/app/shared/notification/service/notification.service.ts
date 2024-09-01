import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification, NotificationType } from '../types';


@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new Subject<Notification>();
  public notification$ = this.notificationSubject.asObservable();

  /**
   *
   * @param title  title of the notification
   * @param text string text
   * @param type Notification type
   * @param timeout timeout number in ms example 5000ms = 5s
   */
  sendNotification(title: string, text: string, type: NotificationType,timeout=5000) {
    this.notificationSubject.next({ title, text, type ,timeout});
  }
}
