import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefualtComponent } from './layouts/defualt/defualt.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefualtModule } from './layouts/defualt/defualt.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PostsComponent } from './modules/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefualtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
