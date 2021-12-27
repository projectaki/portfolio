import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';

@NgModule({
  declarations: [SpeedDialComponent],
  imports: [CommonModule, MatSidenavModule, RouterModule, FlexLayoutModule],
  exports: [
    SpeedDialComponent,
    MatSidenavModule,
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
  ],
})
export class SharedModule {}
