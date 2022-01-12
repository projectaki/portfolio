import { SpeedDialComponent } from './speed-dial.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Speed dial component', () => {
  let comp: SpeedDialComponent;
  let fixture: ComponentFixture<SpeedDialComponent>;
  let host: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeedDialComponent],
    });
    fixture = TestBed.createComponent(SpeedDialComponent);
    comp = fixture.componentInstance;
    host = fixture.nativeElement.querySelector('.container');
    comp.items = [
      {
        imgUrl: 'url',
        func: () => 1,
      },
    ];
    comp.opened = false;
    comp.logoUrl = '';
    fixture.detectChanges();
    comp.ngOnInit();
  });

  test('Test input parameters', () => {
    host.querySelector('c');
    expect(comp.opened).toBe(false);
    expect(comp.logoUrl).toBe('');
    expect(comp.items.length).toBe(1);
  });

  test('Test template', () => {
    const img = host.querySelector('.link-image');
    expect(img?.getAttribute('src')).toContain('url');

    const items = host.querySelectorAll('.node-wrapper');
    expect(items.length).toBe(1);
  });

  test('Test template item func called', () => {
    const node: HTMLElement = host.querySelector('.node')!;
    const func = jest.spyOn(comp.items[0], 'func');
    node?.click();
    expect(func).toHaveBeenCalled();
  });

  test('Test Speeddial toggle', () => {
    const animDelay = 0.05;
    const node: HTMLElement = host.querySelector('.node')!;

    expect(node.style.animation).toBe('');
    expect(comp.opened).toBe(false);
    comp.toggle();
    expect(node.style.animation).toBe(`scale-up 0.2s linear ${animDelay}s both`);
    comp.toggle();
    expect(node.style.animation).toBe(`scale-down 0.2s linear ${animDelay}s both`);
  });

  test('Test initial scale of items', () => {
    const node: HTMLElement = host.querySelector('.node')!;
    expect(comp.opened).toBe(false);
    expect(node.style.transform).toBe('scale(0)');

    comp.opened = true;
    fixture.detectChanges();
    comp.ngAfterViewInit();
    expect(comp.opened).toBe(true);
    expect(node.style.transform).toBe('scale(1)');
  });

  test('Test speed dial component to be defined', () => {
    expect(comp).toBeDefined();
  });
});
