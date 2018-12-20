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
      picture: "../assets/logo.png",
      modele: "Iphone 9",
      prix: "800€",
      impact_carbone:"95 kg/Co2",
      classe_energetique:"../assets/green.png"
    },
    {
      modele: "pencils",
      prix: "",
      impact_carbone:"",
      classe_energetique:"../assets/red.png"
    },
    {
      modele: "pencils",
      prix: "",
      impact_carbone:"",
      classe_energetique:"../assets/orange.png"
    },
    {
      modele: "pencils",
      prix: "",
      impact_carbone:"",
      classe_energetique:"../assets/green.png"
    },
 ]
 
}
