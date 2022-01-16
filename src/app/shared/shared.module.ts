import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';

@NgModule({
  declarations: [SpeedDialComponent],
  imports: [BrowserModule, MatSidenavModule, FlexLayoutModule],
  exports: [BrowserModule, MatSidenavModule, SpeedDialComponent, FlexLayoutModule],
})
export class SharedModule {}
