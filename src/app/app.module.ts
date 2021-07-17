import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 import { AppRoutingModule } from './app-routing.module';


// import { AppComponent } from './app.component';
// import { HomePageComponent } from './home-page/home-page.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { ItemsPageComponent } from './items-page/items-page.component';
// import { ItemDetailsPageComponent } from './item-details-page/item-details-page.component';
// import { ItemService } from './Shared/item.service';

import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule ,ReactiveFormsModule } from "@angular/forms"


import {   AppComponent,  HomePageComponent ,  HeaderComponent ,
  FooterComponent,  ItemsPageComponent ,ItemDetailsPageComponent   ,ItemService     } from './index';
import { AddItemPageComponent } from './add-item-page/add-item-page.component';
import { HomeWebPageComponent } from './WebSite/home-web-page/home-web-page.component';
import { WebHeaderComponent } from './WebSite/web-header/web-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ItemsPageComponent,
    ItemDetailsPageComponent,
    AddItemPageComponent,
    HomeWebPageComponent,
    WebHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot() ,
    HttpClientModule ,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
