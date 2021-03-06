import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';
import { ToggleSidenavDirective } from '../core/directives/toggle-sidenav.directive';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TimelineModule } from 'primeng/timeline';
import { TimelineComponent } from './timeline/timeline.component';
import { CardModule } from 'primeng/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SpeedDialComponent, ToggleSidenavDirective, ListComponent, TimelineComponent, TimelineComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TimelineModule,
    CardModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    TimelineComponent,
    RouterModule,
    MatSidenavModule,
    SpeedDialComponent,
    FlexLayoutModule,
    ToggleSidenavDirective,
    MatListModule,
    ListComponent,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TimelineModule,
    CardModule,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
