import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

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
  selector: 'app-itm1',
  templateUrl: './itm1.component.html',
  styleUrls: ['./itm1.component.scss']
})
export class Itm1Component implements OnInit {
  itemcode:String | null ='';
  itemname:String | null ='';
  des1:String | null ='';
  des2:String | null ='';
  des3:String | null ='';
  price:number =0 ;
  stock:number =0 ;
  code: string| null ='';

  constructor(private _activatedRouter:ActivatedRoute, private http: HttpClient) {

    this.ngOnInit(); void{
      this:_activatedRouter.paramMap.subscribe(response=>{
        this.code = response.get('code');
      })
    }
    this.laodData();


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

  ngOnInit(): void {
  }

}
