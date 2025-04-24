import { Component } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private api:ApiServicesService){}

  flag:boolean=false
  arrayLetter:any=["a","b","c","d","f",9,8]

  flagClick(){
    alert(this.api.servicesData)
    this.flag=!this.flag
  }
}
