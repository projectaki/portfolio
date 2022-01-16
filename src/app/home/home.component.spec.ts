import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('Test home component', () => {
  let fixture;
  let comp: HomeComponent;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule.withRoutes([])],
      //providers: [{ provide: Router, useValue: mockRouter }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    router = TestBed.inject(Router);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('Is component initialized', () => {
    expect(comp).toBeDefined();
  });

  test('Test input variables', () => {
    comp.items = [
      {
        imgUrl: 'img',
        func: () => 1,
      },
    ];
    comp.logoUrl = 'logoUrl';
    expect(comp.items).toBeDefined();
    expect(comp.items.length).toBe(1);
    expect(comp.logoUrl).toMatch('logoUrl');
  });

  test('Test component ngOnInit', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    comp.ngOnInit();
    expect(comp.items).toBeDefined();
    expect(comp.items.length).toBe(5);

    for (let item of comp.items) {
      const mock = jest.spyOn(item, 'func');
      expect(item).toBeDefined();
      const call = item.func;
      call();
      expect(mock).toHaveBeenCalledTimes(1);
      expect(item.imgUrl.length).toBeGreaterThan(0);
    }
    expect(navigateSpy).toHaveBeenCalledTimes(5);
  });
});
