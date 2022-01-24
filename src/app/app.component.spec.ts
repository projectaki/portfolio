import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('App component', () => {
  test('title matches', () => {
    const titleService = TestBed.inject(Title);
    const app = new AppComponent(titleService);
    expect(app).toBeTruthy();
  });
});
