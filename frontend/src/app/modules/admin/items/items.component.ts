import { Component, OnInit } from '@angular/core';
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
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  itemcode:String | null ='';
  itemname:String | null ='';
  des1:String | null ='';
  des2:String | null ='';
  des3:String | null ='';
  price:number =0 ;
  stock:number =0 ;
  upitemname:String ='a';
  updes1:String ='a';
  updes2:String ='a';
  updes3:String ='a';
  upprice:number =0 ;
  upstock:number =0 ;

  constructor(private http: HttpClient) {
    this.getall();
  }

  update(name:string, des1:string, des2:string, des3:string, price:string, stock:string){
    console.log("done")
    this.http.put("http://localhost:3000/api/v1/item/update",{
      code:this.itemcode,
      name:name.valueOf().toString(),
      des1:des1.valueOf().toString(),
      des2:des2.valueOf().toString(),
      des3:des3.valueOf().toString(),
      price:Number(price),
      stock:Number(stock)
    }).subscribe(result =>{

    })
  }

  itemdataset: Item[] = [];

  getall(){
    this.http.get<Item>("http://localhost:3000/api/v1/item/getall",{

    }).subscribe(result=>{
      // @ts-ignore
      this.itemdataset =result;
    }, error => {

    })
  }
  search(code:String, name:String){
    this.http.get<Item>("http://localhost:3000/api/v1/item/get",{
      headers:{code:code.valueOf(),
                name:name.valueOf()}
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
  ngOnInit(): void {
  }

}
