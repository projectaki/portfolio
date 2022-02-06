import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { BlogComponent } from './blog.component';

describe('Blog', () => {
  test('Test blog component', () => {
    const title = TestBed.inject(Title);
    const meta = TestBed.inject(Meta);

    const comp = new BlogComponent(title, meta);
    expect(comp).toBeDefined();
  });
});
