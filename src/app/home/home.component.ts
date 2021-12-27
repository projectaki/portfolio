import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  items!: MenuItem[];
  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {},
      },
      {
        icon: 'pi pi-refresh',
        command: () => {},
      },
      {
        icon: 'pi pi-trash',
        command: () => {},
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload'],
      },
      {
        icon: 'pi pi-external-link',
        url: 'http://angular.io',
      },
    ];
  }
}
