import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    ProductsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsComponent,
    DetailComponent
  ]
})
export class ProductsModule { }
