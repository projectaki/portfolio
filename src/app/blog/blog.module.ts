import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: ':blogId', component: PostComponent },
];

@NgModule({
  declarations: [BlogComponent, PostComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MarkdownModule.forChild()],
})
export class BlogModule {}
