import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Phone } from "src/models/Phone";
import { Observable } from 'rxjs';



const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

@Injectable({providedIn: 'root'})

export class PhoneService {

    public phone:Phone;
    public ServURL = "http://localhost:8080/phone";


    constructor(public http: HttpClient) {

    }



    getPhone() {
        let listeDeTelephone: Phone[] = [];
        this.http.get<any>(this.ServURL + "/findAll")
        .subscribe((res: any) => {
            let listphone = res;
            for (let phone of listphone) {
                let unPhone = new Phone(
                phone.id,
                phone.brand,
                phone.model,
                phone.phoneNote,
                phone.phoneScore)
                  
                listeDeTelephone.push(unPhone);

            }
        });
        
        return listeDeTelephone;
    }

    // testServer(){
    //     let obs = this.http.get<any>(this.ServURL + "/findAll");
    //     obs.subscribe((response) => console.log(response));
    //   }  

    getOnePhone(){
        const phone: Phone = new Phone();
        this.http.get<Phone>(this.ServURL + "/findById/1").subscribe((res:any) => {
            phone.setId(res.id);
            phone.setBrand(res.brand);
            phone.setModel(res.model);
            phone.setPhoneNote(res.phoneNote);
            phone.setPhoneScore(res.phoneScore);
        })
        return phone;
    };
}


