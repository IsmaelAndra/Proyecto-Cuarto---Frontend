import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: LayoutComponent,
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
