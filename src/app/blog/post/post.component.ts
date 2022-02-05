import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import blogMappings from './../../../blog/blog-mappings.json';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  blogPosts = blogMappings;
  activeBlogPost!: Post;

  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.route.paramMap.subscribe(x => {
      const blogId = x.get('blogId');
      this.activeBlogPost = this.blogPosts.find(p => p.id === blogId)!;
      this.setMetadata(this.activeBlogPost);
    });
  }

  private setMetadata(post: Post) {
    this.title.setTitle(post.title);
    this.meta.addTags([
      { name: 'description', content: post.description },
      { name: 'keywords', content: post.keywords },
    ]);
  }
}
