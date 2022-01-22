import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild([{ path: '', component: ProjectsComponent }])],
})
export class ProjectsModule {}
