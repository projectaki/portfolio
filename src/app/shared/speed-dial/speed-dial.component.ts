import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';
import { SpeedDialItem } from './speeddial-item';

@Component({
  selector: 'speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss'],
})
export class SpeedDialComponent {
  @Input() items: SpeedDialItem[] = [];
  /**Default: false */
  @Input() opened: boolean = false;
  @Input() logoUrl: string = '';

  @ViewChild('cont') cont!: ElementRef;

  private angle: number = 360;

  private readonly _click = new BehaviorSubject<boolean>(this.opened);
  private click$ = this._click.asObservable().pipe(skip(1));
  private unsub$ = new Subject();

  constructor() {}

  ngOnInit() {
    this.angle /= this.items.length;
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

  ngAfterViewInit(): void {
    this.initItemPositions();
    this.click$
      .pipe(
        tap((val) => {
          if (val) this.appear();
          else this.disappear();
        }),
        takeUntil(this.unsub$)
      )
      .subscribe();
  }

  public toggle() {
    this._click.next(!this._click.value);
  }

  private initItemPositions() {
    let startAngle = 270;
    for (let i of this.cont.nativeElement.children) {
      const node = i.children[0];
      i.style.transform = `rotate(${startAngle}deg) translate(${150}px) rotate(-${startAngle}deg)`;
      node.style.transform = `scale(${this.opened ? 1 : 0})`;
      startAngle += this.angle;
    }
  }

  private appear() {
    let delay = 0.05;
    for (let i of this.cont.nativeElement.children) {
      const node = i.children[0];
      node.style.animation = `scale-up 0.2s linear ${delay}s forwards`;
      delay += 0.05;
    }
  }

  private disappear() {
    let delay = 0.05;
    for (let i = this.cont.nativeElement.children.length - 1; i >= 0; i--) {
      const node = this.cont.nativeElement.children[i].children[0];
      node.style.animation = `scale-down 0.2s linear ${delay}s both`;
      delay += 0.05;
    }
  }
}
