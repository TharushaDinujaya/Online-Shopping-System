import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import {Itm1Component} from "./Items/itm1/itm1.component";
import {OrderComponent} from "./order/order.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  {path: 'itm1/:code', component: Itm1Component},
  {path: 'order/:code', component: OrderComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
