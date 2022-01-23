import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListComponent } from './nav-list.component';

describe('NavListComponent', () => {
  let component: NavListComponent;
  let fixture: ComponentFixture<NavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should trigger selection changed ', done => {
    component.selectionChanged.subscribe(x => {
      expect(x).toBeUndefined();
      done();
    });
    component.onSelectionChanged();
  });
});
