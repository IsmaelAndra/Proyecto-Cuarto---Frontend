import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriesComponent } from './histories/histories.component';
import { NewHistoryComponent } from './new-history/new-history.component';
import { EditHistoryComponent } from './edit-history/edit-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from 'src/app/shared/layout/layout.module';



@NgModule({
  declarations: [
    HistoriesComponent,
    NewHistoryComponent,
    EditHistoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule
  ],
  exports: [
    HistoriesComponent,
    NewHistoryComponent,
    EditHistoryComponent
  ]
})
export class HistoriesModule { }
