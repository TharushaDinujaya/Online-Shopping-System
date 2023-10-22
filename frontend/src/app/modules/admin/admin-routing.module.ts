import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import {MessageComponent} from "./message/message.component";
import {OrderComponent} from "./order/order.component";
import {UserComponent} from "./user/user.component";
import {ItemsComponent} from "./items/items.component";

const routes: Routes = [
  { path:'', component:AdminComponent, children:[
      {path:'', redirectTo:'user', pathMatch:'full'},
      {path:'items', component:ItemsComponent},
      {path:'message', component:MessageComponent},
      {path:'order', component:OrderComponent},
      {path:'user', component:UserComponent}
    ]}  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
