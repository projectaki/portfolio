import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  logoUrl = 'assets/logo.png';

  isLight = true;
  constructor() {}

  toggleTheme() {
    this.isLight = !this.isLight;
    let root = document.body;

    root.classList.toggle('lightMode');
  }
}
