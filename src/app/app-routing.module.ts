import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassementDefiComponent } from './page-defi/classement-defi/classement-defi.component';


const routes: Routes = [
  { path: 'classement', component : ClassementDefiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
