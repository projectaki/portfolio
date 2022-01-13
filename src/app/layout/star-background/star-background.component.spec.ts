import { StarBackgroundComponent } from './star-background.component';

describe('Test Star background comp', () => {
  test('Test init and value', () => {
    const comp = new StarBackgroundComponent();
    comp.starCount = 25;
    expect(comp).toBeDefined();
    expect(comp.starCount).toBeDefined();
  });
});
