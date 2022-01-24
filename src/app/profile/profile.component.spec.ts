import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { ProfileComponent } from './profile.component';

describe('Profile', () => {
  test('Test profile component', () => {
    const s = TestBed.inject(Title);
    const comp = new ProfileComponent(s);
    expect(comp).toBeDefined();
  });
});
