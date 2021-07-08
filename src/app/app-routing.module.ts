import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemPageComponent } from './add-item-page/add-item-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemDetailsPageComponent } from './item-details-page/item-details-page.component';
import { ItemsPageComponent } from './items-page/items-page.component';

const routes: Routes = [
  {"path":"Admin/home",component:HomePageComponent},
  {"path":"Admin/items",component:ItemsPageComponent},
  {"path":"Admin/itemsDetails/:id",component:ItemDetailsPageComponent},
  {"path":"Admin/addItem",component:AddItemPageComponent},
  {"path":"",redirectTo:"Admin/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
