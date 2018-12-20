import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassementDefiComponent } from './page-defi/classement-defi/classement-defi.component';
import { PageChangementComponent } from './page-changement/page-changement.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageConsoComponent } from './home-page/page-conso/page-conso.component';
import { ResultComponent } from './home-page/page-conso/result/result.component';

const routes: Routes = [
  { path: "changement", component: PageChangementComponent},
  { path: '', component: HomePageComponent},
  { path: 'classement', component : ClassementDefiComponent},
  { path: 'consommation', component : PageConsoComponent},
  { path: 'result_conso', component : ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
