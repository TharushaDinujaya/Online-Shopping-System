import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {MatTabsModule} from "@angular/material/tabs";
import {Itm1Component} from "./Items/itm1/itm1.component";
import { AllItemsComponent } from './all-items/all-items.component';
import {HttpClientModule} from "@angular/common/http";
import { OrderComponent } from './order/order.component';
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    MainComponent,
    Itm1Component,
    AllItemsComponent,
    OrderComponent
  ],
    imports: [
        CommonModule,
        MainRoutingModule,
        MatTabsModule,
        HttpClientModule,
        MatInputModule,
        MatPaginatorModule
    ]
})
export class MainModule { }
