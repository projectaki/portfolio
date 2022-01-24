import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  logoUrl = 'assets/logo.png';

  constructor(private title: Title) {
    this.title.setTitle('Home');
  }
}
