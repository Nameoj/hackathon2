import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableauDefiComponent } from './page-defi/tableau-defi/tableau-defi.component';
import { ClassementDefiComponent } from './page-defi/classement-defi/classement-defi.component';
import { PageChangementComponent } from './page-changement/page-changement.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ClassementAchatComponent } from './page-changement/classement-achat/classement-achat.component';



const routes: Routes = [
  { path: 'changement', component: PageChangementComponent},
  { path: '', component: HomePageComponent},
  { path: 'classement', component : ClassementDefiComponent},
  { path: 'classement-tel', component : ClassementAchatComponent},
  {path: 'defi', component: TableauDefiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
