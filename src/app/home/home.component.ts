import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  logoUrl = 'assets/logo.png';

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Akos Madarasz');
    this.meta.addTags([
      { name: 'description', content: "Introduction page for Akos's portfolio!" },
      { name: 'keywords', content: 'Introduction, Akos, Madarasz' },
    ]);
  }
}
