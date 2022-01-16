import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeedDialItem } from '../shared/speed-dial/speeddial-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items!: SpeedDialItem[];
  logoUrl = 'assets/logo.png';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initItems();
  }

  private initItems() {
    return (this.items = [
      {
        imgUrl: 'assets/profile-icon.png',
        func: () => {
          this.router.navigate(['profile']);
        },
      },
      {
        imgUrl: 'assets/projects-icon.png',
        func: () => {
          this.router.navigate(['']);
        },
      },
      {
        imgUrl: 'assets/skills-icon.png',
        func: () => {
          this.router.navigate(['']);
        },
      },
      {
        imgUrl: 'assets/contact-icon.png',
        func: () => {
          this.router.navigate(['']);
        },
      },
      {
        imgUrl: 'assets/blog-icon.png',
        func: () => {
          this.router.navigate(['']);
        },
      },
    ]);
  }
}
