import { BlogComponent } from './blog.component';

describe('Blog', () => {
  test('Test blog component', () => {
    const comp = new BlogComponent();
    expect(comp).toBeDefined();
  });
});
