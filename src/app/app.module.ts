import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageConsoComponent } from './home-page/page-conso/page-conso.component';
import { PageChangementComponent } from './page-changement/page-changement.component';
import { FormulaireAchatComponent } from './page-changement/formulaire-achat/formulaire-achat.component';
import { ClassementAchatComponent } from './page-changement/classement-achat/classement-achat.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
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
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
