import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { StarBackgroundComponent } from './star-background/star-background.component';
import { RouterModule } from '@angular/router';
import { NavListComponent } from './nav-list/nav-list.component';

@NgModule({
  declarations: [LayoutComponent, StarBackgroundComponent, NavListComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class LayoutModule {}
