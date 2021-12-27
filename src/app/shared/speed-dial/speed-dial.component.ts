import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss'],
})
export class SpeedDialComponent {
  @ViewChild('cont') cont!: ElementRef;
  number = 6;
  angle = 360 / this.number;

  private readonly _click = new BehaviorSubject<boolean>(false);
  click$ = this._click.asObservable();
  private unsub$ = new Subject();

  constructor() {}

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

  ngAfterViewInit(): void {
    //this.cont.nativeElement.children[0].style.transform = `rotate(${270}deg) translate(${150}px)`;
    let startAngle = 270;
    for (let i of this.cont.nativeElement.children) {
      const node = i.children[0];
      i.style.transform = `rotate(${startAngle}deg) translate(${150}px) rotate(-${startAngle}deg)`;
      node.style.transform = `scale(0)`;
      startAngle += this.angle;
    }
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

  onClick() {
    this._click.next(!this._click.value);
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
