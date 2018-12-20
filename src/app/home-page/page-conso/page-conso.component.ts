import { Component, OnInit, Input } from '@angular/core';
import { PhoneService } from '../../../Services/PhoneService';
import { Phone } from '../../../models/Phone';



@Component({
  selector: 'app-page-conso',
  templateUrl: './page-conso.component.html',
  styleUrls: ['./page-conso.component.css']
})
export class PageConsoComponent implements OnInit {

  public phones:Phone[];

  constructor(public phoneService: PhoneService) { }

  ngOnInit() {
      // this.phoneService.testServer();
  this.phones = this.phoneService.getPhone();
  }
  
}
