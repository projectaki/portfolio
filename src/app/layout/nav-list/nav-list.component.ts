import { Component, EventEmitter, Output } from '@angular/core';
import { ListItem } from 'src/app/shared/list/list-item';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent {
  @Output() selectionChanged = new EventEmitter<void>();

  links: ListItem[] = [
    { name: 'Home', route: '' },
    { name: 'Profile', route: '/profile' },
    { name: 'Projects', route: '/projects' },
    //{ name: 'Skills', route: '/skills' },
    { name: 'Contacts', route: '/contacts' },
    //{ name: 'Blog', route: '/blog' },
  ];

  constructor() {}

  onSelectionChanged() {
    this.selectionChanged.emit();
  }
}
