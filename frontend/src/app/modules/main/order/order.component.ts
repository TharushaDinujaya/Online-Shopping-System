import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

interface Item{
  code:String;
  name:String;
  des1:String;
  des2:String;
  des3:String;
  price:number;
  stock:number;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  itemcode:String | null ='';
  itemname:String | null ='';
  des1:String | null ='';
  des2:String | null ='';
  des3:String | null ='';
  price:number =0 ;
  stock:number =0 ;
  amount:number =0 ;
  code: string| null ='';

  constructor(private _activatedRouter:ActivatedRoute, private http: HttpClient) {

    this.ngOnInit(); void{
      this:_activatedRouter.paramMap.subscribe(response=>{
        this.code = response.get('code');
      })
    }
    this.laodData();
  }

  calculate(unit:string){
      this.amount=Number(unit)*this.price;
  }

  laodData(){
    if(this.code!=null){
      this.http.get<Item>("http://localhost:3000/api/v1/item/load",{
        headers:{code:this.code.valueOf().toString()}
      }).subscribe(result=>{
        // @ts-ignore
        this.itemcode= result.code;
        this.itemname= result.name;
        this.des1= result.des1;
        this.des2= result.des2;
        this.des3= result.des3;
        this.price= result.price;
        this.stock= result.stock;
      }, error => {

      })
    }
  }

  placeOrder(name:string, units:string){
    console.log("done")
    this.http.post("http://localhost:3000/api/v1/order/save",{
      code:this.code+name,
      name:name.valueOf().toString(),
      // @ts-ignore
      itm:this.itemname.valueOf().toString(),
      units:Number(units),
      price:this.amount.valueOf().toString()
    }).subscribe(result =>{

    })
    this.update(units);
  }

  update(buyunits:String){
    console.log("done")
    this.http.put("http://localhost:3000/api/v1/item/update",{
      code:this.itemcode,
      // @ts-ignore
      name:this.itemname.valueOf().toString(),
      // @ts-ignore
      des1:this.des1.valueOf().toString(),
      // @ts-ignore
      des2:this.des2.valueOf().toString(),
      // @ts-ignore
      des3:this.des3.valueOf().toString(),
      price:this.price.valueOf(),
      stock:(this.stock- Number(buyunits))
    }).subscribe(result =>{

    })
  }

  ngOnInit(): void {
  }

}
