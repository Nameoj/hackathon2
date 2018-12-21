import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  repairs= [
    {
      name : "GSM69 Réparations",
      lat : 45.7403071,
      lng : 4.8182648,
    },
    {
      name : "King of GSM",
      lat : 45.7676115,
      lng : 4.8776349
    },
    {
      name : "OTOP",
      lat : 45.7534362,
      lng : 4.8459597
    },
    {
      name : "Microlys.com",
      lat : 45.7350797,
      lng : 4.835878
    },
    {
      name : "Le réparator",
      lat : 45.7476677,
      lng : 4.847961,
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
