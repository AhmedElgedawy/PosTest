import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-details-page',
  templateUrl: './item-details-page.component.html',
  styleUrls: ['./item-details-page.component.css']
})
export class ItemDetailsPageComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    alert(this.route.snapshot.params['id']);
  }

}


