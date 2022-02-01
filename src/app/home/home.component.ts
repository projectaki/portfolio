import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  logoUrl = 'assets/logo.png';
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor(private title: Title) {
    this.title.setTitle('Home');
  }
}
