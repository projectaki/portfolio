import { LayoutComponent } from './layout.component';

describe('Test layout comp', () => {
  test('Test init and value', () => {
    const comp = new LayoutComponent();
    expect(comp).toBeDefined();
  });
});
