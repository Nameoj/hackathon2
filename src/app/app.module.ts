import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageDefiComponent } from './page-defi/page-defi.component';
import { TableauDefiComponent } from './page-defi/tableau-defi/tableau-defi.component';
import { ClassementDefiComponent } from './page-defi/classement-defi/classement-defi.component';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageConsoComponent } from './home-page/page-conso/page-conso.component';
import { PageChangementComponent } from './page-changement/page-changement.component';
import { FormulaireAchatComponent } from './page-changement/formulaire-achat/formulaire-achat.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassementAchatComponent } from './page-changement/classement-achat/classement-achat.component';
import { ResultComponent } from './home-page/page-conso/result/result.component';
import { MatCardModule } from '@angular/material/card';
import { MapComponent } from './map/map.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TipsComponent } from './tips/tips.component';
import { PhoneComponent } from './home-page/page-conso/phone/phone.component';
import { ConsoFormComponent } from './conso-form/conso-form.component';
import { ResultTestComponent } from './home-page/page-conso/result/result-test/result-test.component';
import { ObjectivesComponent } from './home-page/page-conso/result/objectives/objectives.component';
import { FormsModule } from '@angular/forms';
import { DefipersoComponent } from './home-page/page-conso/result/defiperso/defiperso.component';

@NgModule({
  declarations: [
    AppComponent,
    PageDefiComponent,
    TableauDefiComponent,
    ClassementDefiComponent,
    HomePageComponent,
    PageConsoComponent,
    NavbarComponent,
    HomePageComponent,
    PageChangementComponent,
    FormulaireAchatComponent,
    ClassementAchatComponent,
    ResultComponent,
    TipsComponent,
    MapComponent,
    PhoneComponent,
    MapComponent,
    ConsoFormComponent,
    ResultTestComponent,
    ObjectivesComponent,
    DefipersoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
