import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { TocComponent } from './toc/toc.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      { path: '', component: HomeComponent },
      {
        path: '',
        component: TocComponent,
        children: [
          {
            path: 'profile',
            loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
          },
          {
            path: 'projects',
            loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
          },
          {
            path: 'blogs',
            loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
