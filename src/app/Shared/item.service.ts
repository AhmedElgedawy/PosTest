import { Injectable } from '@angular/core';
import { ICustomers, IItems, IUnits } from './Models';
import {ApiConfig} from "./ApiConfig" ;
import {HttpClient, HttpHeaders} from "@angular/common/http" ;
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  myItems:Array<IItems>=[];

  constructor(private http:HttpClient) { }


  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true,
  };

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

  GetById(id:any)
  {
   console.log(this.myItems);
      console.log(id);
      let items:IItems={
          nameEn:"",
          nameAr:"",
          unitId:0,
          createdBy:""
          // ,
          // unitNameAr:""

      }
      for(let i=0;i<this.myItems.length;i++)
      {
          if(this.myItems[i].itemId===parseInt(id))
          {
              return this.myItems[i];
          }
      }
      return items;
  }


  GetAllItems():Observable<Array<IItems>>
  {

      return this.http.get<Array<IItems>>(ApiConfig.ServerUrl+ApiConfig.ItemApiEndPoint+"/GetAllItems");

    // return this.http.get<Array<IItems>>("http://salestwo-001-site1.btempurl.com/Items/GetAllItems");

  }


  GetAllUnits():Observable<Array<IUnits>>
  {

      return this.http.get<Array<IUnits>>(ApiConfig.ServerUrl+ApiConfig.UnitsApiEndPoint+"/GetAllUnits");

    // return this.http.get<Array<IItems>>("http://salestwo-001-site1.btempurl.com/Items/GetAllItems");

  }


  GetItemById(id:number) : Observable<IItems>
  {
      // return this.http.get<IItems>(ApiConfig.ServerUrl+ApiConfig.ItemApiEndPoint+"/GetItemById"+"/"+id);
      // {{LocalUrl}}/Items/GetItemById?id=1045


      // return this.http.get<IItems>("http://salestwo-001-site1.btempurl.com/Items/GetItemById/"+id);



      return this.http.get<IItems>("http://salestwo-001-site1.btempurl.com/Items/GetItemById?id="+id);
  }



  DeleteItemById(ItemId:number) {

alert();
  return this.http.post('http://salestwo-001-site1.btempurl.com/Items/DeleteItem?ItemId=' +ItemId , null , {});
  }




  // AddItem(item:IItems)
  // {
  //  const headers = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  // })
  //  }
  //   const body=JSON.stringify(item);
  //    console.log(body);
  //    alert(body);
  //   // return this.http.post('http://salestwo-001-site1.btempurl.com/Items/AddItem', body,{'headers':headers})

  //  return this.http.post<any>('http://salestwo-001-site1.btempurl.com/Items/AddItem', body).subscribe(data => {
  //     // this.postId = data.id;
  //     console.log(data)

  // })

  // }






  AddItem(item:IItems): Observable<IItems> {
    
      const headers = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json' })
       };


        return this.http.post<IItems>('https://localhost:44330/Items/AddItem',
        JSON.stringify(item) ,headers );
      }


      AddItem2(item:any): Observable<any> {
    
        const headers = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json' })
         };
  
  
          return this.http.post<any>('https://localhost:44330/Items/AddItem',
          item,headers );
        }





    AddActor(formData: FormData) {
      alert();
      const headers = new HttpHeaders().append('Content-Disposition', 'multipart/form-data');




      return this.http.post('https://localhost:44330/Items/AddItem', formData, { withCredentials: true });
    }



 AddCustomer(item:ICustomers): Observable<ICustomers> {




  const headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' })
   };


    return this.http.post<ICustomers>('http://salestwo-001-site1.btempurl.com/Customer/AddCustomer',
    JSON.stringify(item) ,headers );
  }





}





