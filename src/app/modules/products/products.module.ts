import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { LayoutModule } from 'src/app/shared/layout/layout.module';

@NgModule({
  declarations: [
    ProductsComponent,
    DetailComponent,
    EditProductComponent,
    NewProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule
  ],
  exports: [
    ProductsComponent,
    DetailComponent,
    EditProductComponent
  ]
})
export class ProductsModule { }
