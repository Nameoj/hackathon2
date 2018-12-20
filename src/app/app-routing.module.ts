import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableauDefiComponent } from './page-defi/tableau-defi/tableau-defi.component';
import { ClassementDefiComponent } from './page-defi/classement-defi/classement-defi.component';
import { PageChangementComponent } from './page-changement/page-changement.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageConsoComponent } from './home-page/page-conso/page-conso.component';
import { ResultComponent } from './home-page/page-conso/result/result.component';
import { ClassementAchatComponent } from './page-changement/classement-achat/classement-achat.component';
<<<<<<< HEAD
import { MapComponent } from './map/map.component';
=======
import { PageDefiComponent } from './page-defi/page-defi.component';


>>>>>>> d0f26e38fd0f1455f97224c0ac8957f603b68b08

const routes: Routes = [
  { path: 'changement', component: PageChangementComponent},
  { path: '', component: HomePageComponent},
  { path: 'classement', component : ClassementDefiComponent},
  { path: 'consommation', component : PageConsoComponent},
  { path: 'result_conso', component : ResultComponent },
  { path: 'classement-tel', component : ClassementAchatComponent},
<<<<<<< HEAD
  { path: 'map', component : MapComponent},
=======
  {path: 'defi', component: TableauDefiComponent},
  {path: 'challenge', component: PageDefiComponent},
  { path: 'conso', component: PageConsoComponent },
  { path: 'classement', component : ClassementDefiComponent}
>>>>>>> d0f26e38fd0f1455f97224c0ac8957f603b68b08
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
