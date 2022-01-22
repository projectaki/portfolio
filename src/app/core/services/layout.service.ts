import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly toggleSidenavEvent = new Subject<void>();
  public toggleSidenav$ = this.toggleSidenavEvent.asObservable();

  constructor() {}

  toggleSidenav() {
    this.toggleSidenavEvent.next();
  }
}
