import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { TocComponent } from './toc/toc.component';

@NgModule({
  declarations: [AppComponent, TocComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    LayoutModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
