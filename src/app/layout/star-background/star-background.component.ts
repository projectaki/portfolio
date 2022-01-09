import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star-background',
  templateUrl: './star-background.component.html',
  styleUrls: ['./star-background.component.scss']
})
export class StarBackgroundComponent implements OnInit {
  starCount = 20;

  constructor() {}

  ngOnInit(): void {}
}
