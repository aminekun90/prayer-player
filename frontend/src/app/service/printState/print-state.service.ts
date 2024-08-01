import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  private printModeSubject = new BehaviorSubject<boolean>(false);
  printMode$ = this.printModeSubject.asObservable();

  setPrintMode(value: boolean) {
    this.printModeSubject.next(value);
  }

  getPrintMode(): boolean {
    return this.printModeSubject.value;
  }
}
