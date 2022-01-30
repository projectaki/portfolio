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

  onTogle() {
    this.isLight = !this.isLight;
    let root = document.body;

    root.classList.toggle('lightMode');
  }

  showNav() {
    let sidenav = document.querySelector('#sidenav');
    let cont = document.querySelector('#sidenav-content');

    sidenav?.classList.toggle('hidden');
    cont?.classList.toggle('nomargin');
  }
}
