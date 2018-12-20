import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableauDefiComponent } from './page-defi/tableau-defi/tableau-defi.component';

const routes: Routes = [
  {path: 'defi', component: TableauDefiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
