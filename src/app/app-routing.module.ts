import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageChangementComponent } from './page-changement/page-changement.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: "changement", component: PageChangementComponent},
  { path: '', component: HomePageComponent}
<<<<<<< HEAD
];
=======
  ];
>>>>>>> c865b55bc22cdb59a217b7667c0e1dfdbf2edbaf

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
