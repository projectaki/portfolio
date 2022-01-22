import { BreakpointObserver } from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';
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
    }).compileComponents();
    fixture = TestBed.createComponent(LayoutComponent);
    comp = fixture.componentInstance;
    mockLayoutService = TestBed.inject(LayoutService);
    mockBpo = TestBed.inject(BreakpointObserver);
    fixture.detectChanges();
  });
  it('should be initialised', () => {
    expect(comp).toBeDefined();
    expect(mockLayoutService).toBeDefined();
    expect(mockBpo).toBeDefined();
  });

  //   it(
  //     'should toggle sidenav when layoutservice emits',
  //     waitForAsync(() => {
  //       mockLayoutService.toggleSidenav$.subscribe(() => expect(1).toBe(1));
  //       mockLayoutService.toggleSidenav();
  //     })
  //   );
});
