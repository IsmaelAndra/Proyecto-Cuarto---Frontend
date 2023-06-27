import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductModel } from '../entities/product.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
  }

  products: ProductModel = {
    name_product: '',
    price_product: 0,
    description_product: '',
    detailed_description_product: '',
    images_product: '',
    status_product: false,
    stock_product: 0,
    category: 0
  };

  nuevoForm = new FormGroup({
    name_product: new FormControl(''),
    price_product: new FormControl(0),
    description_product: new FormControl(''),
    detailed_description_product: new FormControl(''),
    images_product: new FormControl(''),
    status_product: new FormControl(false),
    stock_product: new FormControl(0),
    category: new FormControl(0)
  })

  submit(data: any) {
    if (this.products) {
      data.id_product = this.products.id_product;
    }
    this.productsService.store(data).subscribe((result) => {
      if (result) {
        Swal.fire({
          icon: 'success',
          title: 'Guardado con Exito',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    setTimeout(() => {
      this.router.navigate(['/products'])
    }, 1700);
    console.log(data);
  }

  regresar() {
    this.router.navigate(['/products']);
  }
}
