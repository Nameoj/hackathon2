import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/models/Phone';
import { PhoneService } from 'src/Services/PhoneService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

public phones:Phone[];

  constructor(
    public phoneService: PhoneService
  ) { }

  ngOnInit() {
  // this.phoneService.testServer();
  this.phones = this.phoneService.getPhone();
  

  }

}
