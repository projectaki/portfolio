import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  //let gitService: GithubService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    //gitService = TestBed.inject(GithubService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should be defined', () => {
    expect(component).toBeTruthy();
  });

  // test('should call github released', () => {
  //   expect(component).toBeTruthy();

  // });
});
