import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found.component";
import {ListePersonnesComponent} from "./liste-personnes.component";
import {DashboardComponent} from "./dashboard.component";
import {DetailsPersonneComponent} from "./details-personne.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'personnes', component: ListePersonnesComponent},
  {path: 'personnes/:id', component: DetailsPersonneComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
