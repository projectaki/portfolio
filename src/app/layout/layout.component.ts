import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: ` <star-background></star-background>
    <router-outlet></router-outlet>`,
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
