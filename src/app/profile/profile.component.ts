import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Profile');
    this.meta.addTags([
      { name: 'description', content: "Profile page for Akos's portfolio!" },
      { name: 'keywords', content: 'Profile, Akos, Madarasz' },
    ]);
  }
}
