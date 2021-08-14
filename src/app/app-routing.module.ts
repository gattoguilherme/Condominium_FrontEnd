import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DwellerListComponent } from './components/dweller-list/dweller-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dweller-list', component: DwellerListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
