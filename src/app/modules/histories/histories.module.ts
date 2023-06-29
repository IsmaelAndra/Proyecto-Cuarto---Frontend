import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriesComponent } from './histories/histories.component';
import { NewHistoryComponent } from './new-history/new-history.component';
import { EditHistoryComponent } from './edit-history/edit-history.component';



@NgModule({
  declarations: [
    HistoriesComponent,
    NewHistoryComponent,
    EditHistoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HistoriesComponent,
    NewHistoryComponent,
    EditHistoryComponent
  ]
})
export class HistoriesModule { }
