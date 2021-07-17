import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from '../Shared/item.service';
import { ICustomers, IItems, IUnits } from '../Shared/Models';
import {ActivatedRoute,Router } from "@angular/router";
import {  FormBuilder, FormGroup, Validators , NgForm, ValidationErrors } from '@angular/forms';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

//  import * as $ from 'jquery';

declare var $: any;


@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.css']
})
export class AddItemPageComponent implements OnInit {

  urlImage: string | any ;

  id:string | null="";
  formSate:number=1;
  title='Add';
  myitems:IItems={nameAr:"", nameEn:"" , createdBy:"" , unitId:0,  itemId:0} ;
  units:Array<IUnits>=[];

  selectedFile:File |  any = null;
  
  
  constructor( private  itemservice:ItemService
     , private route:Router ,
     private http: HttpClient ,
      private activeRoute:ActivatedRoute ,
      private toastr: ToastrService

     ) {}


  ngOnInit(): void {


    this.urlImage = 'assets/images/User.png';

    this.activeRoute.paramMap.subscribe((param=>
      {
        //alert(this.formSate);
        if(param!==null && param!==undefined
          && param.get('id')!==null)
        {
            this.id=param.get('id');
            if(this.id==="0")
              return;
            this.formSate=2;
            this.myitems=this.itemservice.GetById(this.id);
            console.log(this.myitems);
        }
      }))

    

          // let itemservice:ItemService = new ItemService();
     this.itemservice.GetAllUnits().subscribe((data)=>
     {
          this.units =  data ;

          console.log(  data );



        } , error => {
          console.log('httperror:');
          console.log(error);
        }  );


  // this.img = JSON.parse(localStorage.getItem('FileName') || '{}')  ;

    // if (this.img?.name == null) {
    //   // Give the user an error message or something...
    //   this.img = undefined;
    // }



  }


  showSuccess(title:any , message :any) {
    this.toastr.success(title, message);
  }


  // onSubmit(blogData: FormData) {
  //   console.log('new blog has been submitted.', blogData);
  //   this.itemservice.uploadImageTest(blogData).subscribe(
  //     (data: IItems) => {
  //       // log the employee object after the post is completed
  //       console.log(data);

  //       this.route.navigate(["/Admin/items"]);
  //     },
  //     (error: any) => { console.log(error); }
  //   );
  //   this.newBlogForm.reset();
  // }

  // SaveDate(myform:any)
  // {
  //  // console.log(myform.value);
  //   let item:IItems = {
  //     NameAr:myform.value.NameAr,
  //     NameEn:myform.value.NameEn,
  //     CreatedBy:myform.value.CreatedBy,
  //     UnitId:myform.value.UnitId,
  //     image:'http://salestwo-001-site1.btempurl.com/images/b09f5cc5-ed08-4fe8-a880-955b5abc991b_Eggplant.jpg'
  //   }
  //   this.itemservice.AddItem(item);
  //   //this.route.navigate(["/Admin/items"]);
  // }



  OnClear()
  {
    this.myitems={
      itemId:0,
      nameAr:"",
      nameEn:"",
      createdBy:"",
      unitId:0,

    }
    this.formSate=1;
  }
  onFileSelected(event:any)
  {

    this.selectedFile =  <File>event.target.files[0];
    console.log(this.selectedFile);

    if (event.target.files !== null && event.target.files.length > 0 ) {
      this.selectedFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        $('#image').attr('src', e.target?.result);
      }
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.selectedFile = null;
      $('#image').attr('src', 'assets/images/User.png');
    }
  

    
  }

  onUpload(myform:any){

    const fileData = new FormData();
    fileData.append('photo',  this.selectedFile, this.selectedFile.name);
    fileData.append('nameAr',myform.value.nameAr);
    fileData.append('nameEn',  myform.value.nameEn);
    fileData.append('createdBy',  myform.value.createdBy);
    fileData.append('unitId',myform.value.unitId);

    console.log(fileData);
  // this.itemservice.AddItem2(fileData);

  // const headers = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json' })
  //  };


   const headers = {
    headers: new HttpHeaders({'encrypt': 'multipart/form-data'})
   };


  // let headers = new Headers({'encrypt': 'multipart/form-data'});
  



//  let options = {
//     headers: headers
//  }
  //   https://localhost:44330/Items/AddItem
 //    http://salestwo-001-site1.btempurl.com/Items/AddItem

    this.http.post('http://salestwo-001-site1.btempurl.com/Items/AddItem' , fileData , headers).subscribe(res=>{
      console.log(res);
   this.route.navigate(["/Admin/items"]);

     this.showSuccess(  ' Message  ', 'Item Added successfully' );

    }, error => {
      console.log('httperror:');
      console.log(error);
    } )
   

   

  }


  onBack() {

    this.route.navigate(['/Admin/items']);
  }

  SaveData(myform:any): void {


     // const formData = new FormData();
 
        let item:IItems = {
      nameAr:myform.value.nameAr,
      nameEn:myform.value.nameEn,
      createdBy:myform.value.createdBy,
      unitId:myform.value.unitId,
      image:myform.value.image
    }



    // const formData = new FormData();
    // formData.append('nameAr', myform.value.nameAr);
    // formData.append('Photo', myform.value.image);
    // formData.append('nameEn', myform.value.nameEn);
    // formData.append('createdBy', myform.value.createdBy);
    // formData.append('unitId', myform.value.unitId);

    this.itemservice.AddItem(item).subscribe(
      (data: IItems) => {
        // log the employee object after the post is completed
        console.log(data);
         myform.reset();

          this.showSuccess( ' Item Name : ' +  item.nameAr + '----' + 'Item Name En' + item.nameEn + '   ', 'Item Added successfully' );
        this.route.navigate(["/Admin/items"]);
      },
      (error: any) => { console.log(error); }
    );
  }




  SaveDataCustomer(myform:any): void {

    let item:ICustomers = {
  CustNameAr:'عميل تيست',
  CustNameEn:'customer',
  PhoneNo:'992393',
  AreaName:'Hawally',
  BlockNo:3,
  StreetNo:1,
  AvenueNo:3,
  HomeNo:3,
  BuildingNo:33,
  FlatNo:44,
  Notes:'noooooootes',
  CreatedBy:'ahmed admin'

  //,
//  image:'http://salestwo-001-site1.btempurl.com/images/b09f5cc5-ed08-4fe8-a880-955b5abc991b_Eggplant.jpg'
}

this.itemservice.AddCustomer(item).subscribe(
  (data: ICustomers) => {
    // log the employee object after the post is completed
    console.log(data);
     myform.reset();
    this.route.navigate(["/Admin/items"]);
  },
  (error: any) => { console.log(error); }
);
}














}
