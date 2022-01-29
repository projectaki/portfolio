import { Component, Input } from '@angular/core';
import { TimeLineItem } from './timeline-item';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  @Input() timelineItems!: TimeLineItem[];
}
