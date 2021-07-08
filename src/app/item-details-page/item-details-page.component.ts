import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../Shared/item.service" ;

@Component({
  selector: 'app-item-details-page',
  templateUrl: './item-details-page.component.html',
  styleUrls: ['./item-details-page.component.css']
})
export class ItemDetailsPageComponent implements OnInit {

  constructor(private route:ActivatedRoute , private itemService:ItemService ) { }


    item:any;
  ngOnInit(): void {
    //  alert(this.route.snapshot.params['id']);



    let id:any;
    this.route.paramMap.subscribe(params => {
      id = params.get('id');
      console.log(id);
      this.itemService.GetItemById(id).subscribe((data)=>
      {
          this.item=data;
          console.log(this.item);
      });
    });





  }

}


