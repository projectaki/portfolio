import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss'],
})
export class SpeedDialComponent {
  @ViewChild('cont') cont!: ElementRef;
  number = 6;
  angle = 360 / this.number;
  constructor() {}

  ngAfterViewInit(): void {
    //this.cont.nativeElement.children[0].style.transform = `rotate(${270}deg) translate(${150}px)`;
    let startAngle = 270;
    for (let i of this.cont.nativeElement.children) {
      i.style.transform = `rotate(${startAngle}deg) translate(${150}px) rotate(-${startAngle}deg)`;
      startAngle += this.angle;
    }
  }
}
