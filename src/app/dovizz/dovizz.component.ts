import { Component, OnInit } from '@angular/core';
import { HomeServicesService } from '../home-services.service';

@Component({
  selector: 'app-dovizz',
  templateUrl: './dovizz.component.html',
  styleUrls: ['./dovizz.component.scss'],
})
export class DovizzComponent implements OnInit {

  constructor(public homeServicesService:HomeServicesService) { }
  
  totalData
  ngOnInit() {
    this.homeServicesService.GetTotaldata().then(x=>{
      this.totalData = x;
    });
  }

}
