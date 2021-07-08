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

      return this.http.get<Array<IItems>>(ApiConfig.ServerUrl+ApiConfig.ItemApiEndPoint+"/GetAllItems");

    // return this.http.get<Array<IItems>>("http://salestwo-001-site1.btempurl.com/Items/GetAllItems");

  }


  GetItemById(id:number) : Observable<IItems>
  {
      // return this.http.get<IItems>(ApiConfig.ServerUrl+ApiConfig.ItemApiEndPoint+"/GetItemById"+"/"+id);
      // {{LocalUrl}}/Items/GetItemById?id=1045


      // return this.http.get<IItems>("http://salestwo-001-site1.btempurl.com/Items/GetItemById/"+id);



      return this.http.get<IItems>("http://salestwo-001-site1.btempurl.com/Items/GetItemById?id="+id);
  }

}
