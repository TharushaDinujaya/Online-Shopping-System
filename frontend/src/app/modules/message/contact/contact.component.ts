import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }


  send(name:string, message:string){
    console.log("done")
    this.http.post("http://localhost:3000/api/v1/message/save",{
      name:name.valueOf().toString(),
      message:message.valueOf().toString()
    }).subscribe(result =>{

    })
  }


  ngOnInit(): void {
  }

}
