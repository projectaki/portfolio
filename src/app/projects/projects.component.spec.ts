import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { ProjectsComponent } from './projects.component';

describe('Projects', () => {
  test('Test projects component', () => {
    const s = TestBed.inject(Title);
    const comp = new ProjectsComponent(s);
    expect(comp).toBeDefined();
  });
});
