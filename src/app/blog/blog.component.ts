import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import blogMappings from './../../blog/blog-mappings.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogPosts = blogMappings;

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Blog');
    this.meta.addTags([
      { name: 'description', content: "Blog page for Akos's portfolio!" },
      { name: 'keywords', content: 'Blog, Akos, Madarasz' },
    ]);
  }
}
