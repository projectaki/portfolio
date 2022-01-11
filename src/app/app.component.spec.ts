import { AppComponent } from './app.component';

describe('App component', () => {
  test('title matches', () => {
    const app = new AppComponent();
    expect(app.title).toMatch('portfolio');
  });
});
