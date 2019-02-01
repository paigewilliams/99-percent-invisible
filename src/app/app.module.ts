import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FeaturedComponent } from './featured/featured.component';
import { BodyComponent } from './body/body.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PodcastApiService } from './podcast-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FeaturedComponent,
    BodyComponent,
    CategoryComponent,
    FooterComponent,
    CardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PodcastApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
