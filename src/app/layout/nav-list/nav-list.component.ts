import { Component } from '@angular/core';
import { ListItem } from 'src/app/shared/list/list-item';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent {
  links: ListItem[] = [
    { name: 'Profile', route: '/profile' },
    { name: 'Projects', route: '/projects' },
    { name: 'Blog', route: '/blogs' },
    //{ name: 'Skills', route: '/skills' },
    //{ name: 'Contacts', route: '/contacts' },
  ];

  constructor() {}

  //
}
