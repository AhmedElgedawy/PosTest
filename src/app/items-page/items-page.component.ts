import { Component, OnInit } from '@angular/core';
import  {IItems}  from '../Shared/Models';
import {ItemService} from '../Shared/item.service' ;
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {

  constructor(private  itemservice:ItemService ,private toastr: ToastrService) { }

     items:Array<IItems>=[];

  ngOnInit(): void {

    // let itemservice:ItemService = new ItemService();
     this.itemservice.GetAllItems().subscribe((data)=>
     {

          this.items =  data ;
          console.log(  this.items );
        } , error=> { console.log( error) ;  }   );




  }





//   Individual Options
// Passed to ToastrService.success/error/warning/info/show()

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!' );
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

