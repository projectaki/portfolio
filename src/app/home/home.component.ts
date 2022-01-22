import { Component } from '@angular/core';

import { SpeedDialItem } from '../shared/speed-dial/speeddial-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  items!: SpeedDialItem[];
  logoUrl = 'assets/logo.png';
}
