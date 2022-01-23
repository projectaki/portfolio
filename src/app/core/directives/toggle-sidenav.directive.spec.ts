import { TestBed } from '@angular/core/testing';
import { LayoutService } from '../services/layout.service';
import { ToggleSidenavDirective } from './toggle-sidenav.directive';

describe('ToggleSidenavDirective', () => {
  let layoutService: LayoutService;

  test('should create an instance', () => {
    layoutService = TestBed.inject(LayoutService);
    const directive = new ToggleSidenavDirective(layoutService);
    expect(directive).toBeTruthy();
  });
});
