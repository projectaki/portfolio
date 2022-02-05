import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { ProjectsComponent } from './projects.component';

describe('Projects', () => {
  test('Test projects component', () => {
    const title = TestBed.inject(Title);
    const meta = TestBed.inject(Meta);
    const comp = new ProjectsComponent(title, meta);
    expect(comp).toBeDefined();
  });
});
