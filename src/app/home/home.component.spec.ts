import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Home component', () => {
  let fixture;
  let comp: HomeComponent;
  //let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule.withRoutes([])],
      //providers: [{ provide: Router, useValue: mockRouter }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    //router = TestBed.inject(Router);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be initialized', () => {
    expect(comp).toBeDefined();
  });

  it('should have defined logoUrl', () => {
    expect(comp.logoUrl).toBe('assets/logo.png');
  });
});
