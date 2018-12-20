import { Component, OnInit, Input } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-page-conso',
  templateUrl: './page-conso.component.html',
  styleUrls: ['./page-conso.component.css']
})
export class PageConsoComponent implements OnInit {

  choixMarque: boolean = false;
  choixModele: boolean = false;


  constructor() { }

  ngOnInit() {
  }

}
