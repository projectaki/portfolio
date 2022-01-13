import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('Test home component', () => {
  let module;
  let fixture;
  let comp: HomeComponent;

  beforeEach(() => {
    module = TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = module.createComponent(HomeComponent);
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
    comp.ngOnInit();
    expect(comp.items).toBeDefined();
    expect(comp.items.length).toBe(5);
    const w = jest.spyOn(window, 'alert').mockReturnValue();

    for (let item of comp.items) {
      const mock = jest.spyOn(item, 'func');
      expect(item).toBeDefined();
      item.func();
      expect(mock).toHaveBeenCalledTimes(1);
      expect(item.imgUrl.length).toBeGreaterThan(0);
    }
    expect(w).toHaveBeenCalledTimes(5);
  });
});
