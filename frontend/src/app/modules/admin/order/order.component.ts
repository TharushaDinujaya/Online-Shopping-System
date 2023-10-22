import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Order{
  name:String;
  itm:String;
  units:String;
  price:String;
  code:String;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.getall();
  }
  orderdataset: Order[] = [];

  getall(){
    this.http.get<Order>("http://localhost:3000/api/v1/order/getall",{

    }).subscribe(result=>{
      // @ts-ignore
      this.orderdataset =result;
    }, error => {

    })
  }
  delete( delcode:String){
    this.http.delete("http://localhost:3000/api/v1/order/delete",{
      headers:{code:delcode.valueOf()}
    }).subscribe(result=>{
      // @ts-ignore
      this.messagedataset =result;
    }, error => {

    })
  }
  ngOnInit(): void {
  }

}
