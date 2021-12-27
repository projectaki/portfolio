import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { StarBackgroundComponent } from './star-background/star-background.component';

@NgModule({
  declarations: [LayoutComponent, StarBackgroundComponent],
  imports: [CommonModule, SharedModule],
})
export class LayoutModule {}
