import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/pages/login/login.component';
import { DashboardComponent } from './modules/pages/dashboard/dashboard.component';
import { LeadsFormComponent } from './modules/pages/leads/leads-form/leads-form.component';
import { LeadsListComponent } from './modules/pages/leads/leads-list/leads-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'leads/add', component: LeadsFormComponent },
  { path: 'leads/list', component: LeadsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
