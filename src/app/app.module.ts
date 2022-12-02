import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { PostInattiviComponent } from './post-inattivi/post-inattivi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostCardComponent } from './post-card/post-card.component';

const Routes:Route[] = [
  {
      path: "",
      component: HomeComponent
  },
  {
      path: "active-posts",
      component: PostAttiviComponent
  },
  {
      path: "inactive-posts",
      component: PostInattiviComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    NavbarComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
