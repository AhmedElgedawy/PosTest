import { Component, OnInit } from '@angular/core';
import  {IItems, IUnits}  from '../Shared/Models';
import {ItemService} from '../Shared/item.service' ;
import { ToastrService } from 'ngx-toastr';
import { NgForm} from "@angular/forms"
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {
  id:string | null="";
  myitems:IItems={nameAr:"", nameEn:"" , createdBy:"" , unitId:0,  itemId:0};
  formSate:number=1;

  units:Array<IUnits>=[];
  constructor(private  itemservice:ItemService
    , private route:Router ,private toastr: ToastrService) { }

     items:Array<IItems>=[];


     items2:Array<any>=[1,2,3,4,5,6,7];

  ngOnInit(): void {


    this.itemservice.GetAllUnits().subscribe((data)=>
    {
         this.units =  data ;

         console.log(  data );



       } , error=> { console.log( error) ;  }   );


    // let itemservice:ItemService = new ItemService();
     this.itemservice.GetAllItems().subscribe((data)=>
     {


    $(document).ready(function()
    {


      // let body1 = <HTMLDivElement> document.body;
      // let script1 = document.createElement('script');
      // script1.innerHTML = '';
      // script1.src = '../assets/app-assets/vendors/js/extensions/dropzone.min.js';
      // script1.async = true;
      // script1.defer = true;
      // body1.appendChild(script1);

      // let body2 = <HTMLDivElement> document.body;
      // let script2 = document.createElement('script');
      // script2.innerHTML = '';
      // script2.src = '../assets/app-assets/vendors/js/tables/datatable/datatables.min.js';
      // script2.async = true;
      // script2.defer = true;
      // body2.appendChild(script2);

      // let body3 = <HTMLDivElement> document.body;
      // let script3 = document.createElement('script');
      // script3.innerHTML = '';
      // script3.src = '../assets/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js';
      // script3.async = true;
      // script3.defer = true;
      // body3.appendChild(script3);


      // let body4 = <HTMLDivElement> document.body;
      // let script4 = document.createElement('script');
      // script4.innerHTML = '';
      // script4.src = '../assets/app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js';
      // script4.async = true;
      // script4.defer = true;
      // body4.appendChild(script4);

      // let body5 = <HTMLDivElement> document.body;
      // let script5 = document.createElement('script');
      // script5.innerHTML = '';
      // script5.src = '../assets/app-assets/vendors/js/tables/datatable/buttons.bootstrap.min.js';
      // script5.async = true;
      // script5.defer = true;
      // body5.appendChild(script5);

      // let body6 = <HTMLDivElement> document.body;
      // let script6 = document.createElement('script');
      // script6.innerHTML = '';
      // script6.src = '../assets/app-assets/vendors/js/tables/datatable/dataTables.select.min.js';
      // script6.async = true;
      // script6.defer = true;
      // body6.appendChild(script6);


      // let body7 = <HTMLDivElement> document.body;
      // let script7 = document.createElement('script');
      // script7.innerHTML = '';
      // script7.src = '../assets/app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js';
      // script7.async = true;
      // script7.defer = true;
      // body7.appendChild(script7);


      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML = '';
      script.src = '../assets/app-assets/js/scripts/ui/data-list-view.js';
      script.async = true;
      script.defer = true;
      body.appendChild(script);

    });

          this.items =  data ;
          this.itemservice.myItems=data;
          console.log(  data );

          console.log(  this.items[12].unit.unitNameAr );

        } , error=> { console.log( error) ;  }   );


  }




  SaveDate(myform:NgForm): void {

    let item:IItems = {
  nameAr:myform.value.nameAr,
  nameEn:myform.value.nameEn,
  createdBy:myform.value.createdBy,
  unitId:myform.value.unitId,
  image:myform.value.Photo     }


this.itemservice.AddItem(item).subscribe(
  (data: IItems) => {
    // log the employee object after the post is completed
    console.log(data);
     myform.reset();

    this.route.navigate(["/Admin/items"]);
  },
  (error: any) => { console.log(error); }
);
}


OnEdit(id:number|any)
{
   this.myitems=this.itemservice.GetById(id);
   this.formSate=2;
}

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

  OnDelete(id:number|any)
  {


  
 
    this.itemservice.DeleteItemById(id).subscribe(data => {
      console.log(data);
      this.showSuccess(  ' Message  ', 'Item Deleted successfully' );

    });
  }



//   Individual Options
// Passed to ToastrService.success/error/warning/info/show()

 
showSuccess(title:any , message :any) {
  this.toastr.success(title, message);
}
  showSuccessWithTime() {
    this.toastr.success('Hello world!', 'Toastr fun!' , {
      timeOut: 1000,
    });
  }
  showError() {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }
  showWarning() {
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }
  showInfo() {
    this.toastr.info('Hello world!', 'Toastr fun!');
  }

  showShow() {
    this.toastr.show('Hello world!', 'Toastr fun!' );
  }



}

