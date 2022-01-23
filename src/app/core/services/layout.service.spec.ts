import { TestBed } from '@angular/core/testing';

import { LayoutService } from './layout.service';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('toggle sidenav on method call', done => {
    service.toggleSidenav$.subscribe(x => {
      expect(x).toBeUndefined();
      done();
    });
    service.toggleSidenav();
  });
});
