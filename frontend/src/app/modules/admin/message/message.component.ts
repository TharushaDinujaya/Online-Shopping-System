import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Message{
  name:String;
  message:String;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.getall();
  }
  messagedataset: Message[] = [];

  getall(){
    this.http.get<Message>("http://localhost:3000/api/v1/message/getall",{

    }).subscribe(result=>{
      // @ts-ignore
      this.messagedataset =result;
    }, error => {

    })
  }
  delete( delname:String, delmessage:String){
    this.http.delete("http://localhost:3000/api/v1/message/delete",{
        headers:{name:delname.valueOf(), message:delmessage.valueOf()}
    }).subscribe(result=>{
      // @ts-ignore
      this.messagedataset =result;
    }, error => {

    })
  }
  ngOnInit(): void {
  }

}
