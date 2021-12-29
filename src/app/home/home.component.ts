import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SpeedDialComponent } from '../shared/speed-dial/speed-dial.component';
import { SpeedDialItem } from '../shared/speed-dial/speeddial-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(SpeedDialComponent) speedDial!: SpeedDialComponent;
  constructor(private router: Router) {}
  items!: SpeedDialItem[];
  logoUrl = 'assets/logo.png';

  ngOnInit(): void {
    this.items = [
      {
        imgUrl: 'assets/profile-icon.png',
        func: () => {
          alert('profile');
          //this.router.navigate(['']);
        },
      },
      {
        imgUrl: 'assets/projects-icon.png',
        func: () => {
          alert('projects');
          //this.router.navigate(['']);
        },
      },
      {
        imgUrl: 'assets/skills-icon.png',
        func: () => {
          alert('skills');
          //this.router.navigate(['']);
        },
      },
      {
        imgUrl: 'assets/contact-icon.png',
        func: () => {
          alert('contact');
          //this.router.navigate(['']);
        },
      },
      {
        imgUrl: 'assets/blog-icon.png',
        func: () => {
          alert('blog');
          //this.router.navigate(['']);
        },
      },
    ];
  }

  speedDialToggle() {
    this.speedDial.toggle();
  }
}
