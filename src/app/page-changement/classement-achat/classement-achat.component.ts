import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classement-achat',
  templateUrl: './classement-achat.component.html',
  styleUrls: ['./classement-achat.component.css']
})
export class ClassementAchatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  phones = [
    { 
      picture: "../assets/iphone.png",
      modele: "Iphone 9",
      prix: "800€",
      impact_carbone:"95 kg",
      classe_energetique:"../assets/green.png"
    },
    { 
      picture: "../assets/xiaomi.png",
      modele: "Xiaomi-redmi note 5",
      prix: "250€",
      impact_carbone:"105 kg",
      classe_energetique:"../assets/red.png"
    },
    { 
      picture: "../assets/samsung.png",
      modele: "Samsung S7",
      prix: "400€",
      impact_carbone:"88 kg",
      classe_energetique:"../assets/orange.png"
    },
    { 
      picture: "../assets/huawei.png",
      modele: "Huawei P10",
      prix: "700€",
      impact_carbone:"82 kg",
      classe_energetique:"../assets/green.png"
    },
 ]
 
}
