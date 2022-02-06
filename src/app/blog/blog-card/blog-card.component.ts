import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  imgUrl!: string;
  title!: string;
  description!: string;
  date!: string;
}
