import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListItem } from './list-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() elements: ListItem[] = [];
  @Output() selectionChanged = new EventEmitter<void>();

  constructor() {}

  selectTrigger() {
    this.selectionChanged.emit();
  }
}
