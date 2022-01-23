import { BreakpointObserver } from '@angular/cdk/layout';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutService } from '../core/services/layout.service';
import { LayoutComponent } from './layout.component';

describe('Layout component', () => {
  let comp: LayoutComponent;
  let fixture;
  let mockLayoutService: LayoutService;
  let mockBpo: BreakpointObserver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [MatSidenavModule, BrowserAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(LayoutComponent);
    comp = fixture.componentInstance;
    mockLayoutService = TestBed.inject(LayoutService);
    mockBpo = TestBed.inject(BreakpointObserver);
    fixture.detectChanges();
  });

  test('should be initialised', () => {
    expect(comp).toBeDefined();
    expect(mockLayoutService).toBeDefined();
    expect(mockBpo).toBeDefined();
  });

  test('should toggle sidenav when layoutservice emits', () => {
    const spy = jest.spyOn(comp.sidenav, 'toggle');

    mockLayoutService.toggleSidenav();

    expect(spy).toHaveBeenCalled();
  });

  test('shouldnt close sidenav if screen is big', () => {
    const spy = jest.spyOn(comp.sidenav, 'close');
    comp.isScreenSmall = false;

    comp.handleSelection();

    expect(spy).toHaveBeenCalledTimes(0);
  });

  test('should close sidenav if screen is small', () => {
    const spy = jest.spyOn(comp.sidenav, 'close');
    comp.isScreenSmall = true;

    comp.handleSelection();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
