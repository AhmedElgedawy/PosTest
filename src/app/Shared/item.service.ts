import { Injectable } from '@angular/core';
import { IItems } from './Models';
import {ApiConfig} from "./ApiConfig" ;
import {HttpClient} from "@angular/common/http" ;
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  // GetAllItems():Array<any>
  // {

  //   this.http.get(ApiConfig.ServerUrl+ApiConfig.ItemApiEndPoint+"/PopularItems").subscribe((data)=>{
  //     console.log( data)
  //   });
  //   return [
  //     {id:1,name:'Ahmed', price:8558},
  //     {id:2,name:'Dareen', price:8998},
  //     {id:3,name:'Talia', price:2343},
  //     {id:4,name:'Rahma', price:4322},
  //    ];
  // }




  GetAllItems():Observable<Array<IItems>>
  {
     // alert("servise data ");
      return this.http.get<Array<IItems>>(ApiConfig.ServerUrl+ApiConfig.ItemApiEndPoint+"/PopularItems");

  }

}
