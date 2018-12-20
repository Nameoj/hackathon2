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
import { ClassementAchatComponent } from './page-changement/classement-achat/classement-achat.component';


@NgModule({
  declarations: [
    AppComponent,
    PageDefiComponent,
    TableauDefiComponent,
    ClassementDefiComponent
    HomePageComponent,
    PageConsoComponent,
    NavbarComponent,
    HomePageComponent,
    PageChangementComponent,
    FormulaireAchatComponent,
    ClassementAchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
