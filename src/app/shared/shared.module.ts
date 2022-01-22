import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';
import { ToggleSidenavDirective } from '../core/directives/toggle-sidenav.directive';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SpeedDialComponent, ToggleSidenavDirective, ListComponent],
  imports: [CommonModule, RouterModule, MatSidenavModule, FlexLayoutModule, MatListModule],
  exports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    SpeedDialComponent,
    FlexLayoutModule,
    ToggleSidenavDirective,
    MatListModule,
    ListComponent,
  ],
})
export class SharedModule {}
