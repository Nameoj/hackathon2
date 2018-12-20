import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageChangementComponent } from './page-changement/page-changement.component';

const routes: Routes = [
  { path: "changement", component: PageChangementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
