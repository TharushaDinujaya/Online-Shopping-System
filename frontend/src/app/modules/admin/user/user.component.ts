import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { MatLabel, MatFormField} from "@angular/material/form-field";

interface User{
  name:String;
  password:String;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.getall();
  }


  submitForm(name:string, password:string){
    console.log("done")
    this.http.post("http://localhost:3000/api/v1/user/save",{
      name:name.valueOf().toString(),
      password:password.valueOf().toString()
    }).subscribe(result =>{

    })
  }
  userdataset: User[] = [];

  getall(){
    this.http.get<User>("http://localhost:3000/api/v1/user/getall",{

    }).subscribe(result=>{
      // @ts-ignore
      this.userdataset =result;
    }, error => {

    })
  }
  delete( delname:String){
    this.http.delete("http://localhost:3000/api/v1/user/delete",{
      headers:{name:delname.valueOf()}
    }).subscribe(result=>{
      // @ts-ignore
      this.messagedataset =result;
    }, error => {

    })
  }
  ngOnInit(): void {
  }

}
