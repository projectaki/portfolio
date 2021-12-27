import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star-background',
  template: `<div class="stars">
    <div *ngFor="let i of [].constructor(starCount)" class="star"></div>
  </div>`,
  styleUrls: ['./star-background.component.scss'],
})
export class StarBackgroundComponent implements OnInit {
  starCount = 20;

  constructor() {}

  ngOnInit(): void {}
}
