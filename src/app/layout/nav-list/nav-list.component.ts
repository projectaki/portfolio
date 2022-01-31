import { Component } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { ListItem } from 'src/app/shared/list/list-item';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent {
  links$: Observable<ScullyRoute[]> = this.scully.available$;

  links: ListItem[] = [
    { name: 'Home', route: '' },
    { name: 'Profile', route: '/profile' },
    { name: 'Projects', route: '/projects' },
    //{ name: 'Skills', route: '/skills' },
    //{ name: 'Contacts', route: '/contacts' },
    //{ name: 'Blog', route: '/blog' },
  ];

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    this.links$.subscribe(links => {
      console.log(links);
    });
  }
}
