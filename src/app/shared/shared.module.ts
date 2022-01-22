import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';
import { ToggleSidenavDirective } from '../core/directives/toggle-sidenav.directive';

@NgModule({
  declarations: [SpeedDialComponent, ToggleSidenavDirective],
  imports: [MatSidenavModule, FlexLayoutModule],
  exports: [MatSidenavModule, SpeedDialComponent, FlexLayoutModule, ToggleSidenavDirective],
})
export class SharedModule {}
