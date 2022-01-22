import { Directive, HostListener } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Directive({
  selector: '[appToggleSidenav]',
})
export class ToggleSidenavDirective {
  @HostListener('click')
  onClick() {
    this.layoutService.toggleSidenav();
  }

  constructor(private layoutService: LayoutService) {}
}
