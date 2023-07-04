import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { EditHistoryComponent } from './edit-history/edit-history.component';
import { NewHistoryComponent } from './new-history/new-history.component';
import { HistoriesComponent } from './histories/histories.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'histories' },
      { path: 'histories', component: HistoriesComponent },
      { path: 'editar-history/:id', component: EditHistoryComponent },
      { path: 'nuevo-history', component: NewHistoryComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriesRoutingModule { }
