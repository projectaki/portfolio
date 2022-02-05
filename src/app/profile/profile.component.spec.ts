import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { ProfileComponent } from './profile.component';

describe('Profile', () => {
  test('Test profile component', () => {
    const title = TestBed.inject(Title);
    const meta = TestBed.inject(Meta);
    const comp = new ProfileComponent(title, meta);
    expect(comp).toBeDefined();
  });
});
