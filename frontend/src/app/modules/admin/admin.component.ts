import { Component, OnInit } from '@angular/core';
export interface TabItem{
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  tabs: TabItem[]=[
    {
      label:'User',
      icon:'person',
      route:'/admin/user'
    },
    {
      label:'Item',
      icon:'category',
      route:'/admin/items'
    },
    {
      label:'Order',
      icon:'local_mall',
      route:'/admin/order'
    },
    {
      label:'Message',
      icon:'email',
      route:'/admin/message'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
