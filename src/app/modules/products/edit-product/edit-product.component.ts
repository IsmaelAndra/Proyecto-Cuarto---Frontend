import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../entities/product.model';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  constructor(private productsService: ProductsService, private router: Router, private activerouter: ActivatedRoute) {}

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
  editForm = new FormGroup({
    name_product: new FormControl(''),
    price_product: new FormControl(0),
    description_product: new FormControl(''),
    detailed_description_product: new FormControl(''),
    images_product: new FormControl(''),
    status_product: new FormControl(false),
    stock_product: new FormControl(0),
    category: new FormControl(0)
  })

  ngOnInit(): void {
    let productId = this.activerouter.snapshot.paramMap.get('id');
    this.productsService.getOne(productId).subscribe(data => {
      this.products = data;
      this.editForm.setValue({
        'name_product': this.products.name_product,
        'price_product': this.products.price_product,
        'description_product': this.products.description_product,
        'detailed_description_product': this.products.detailed_description_product,
        'images_product': this.products.images_product,
        'status_product': this.products.status_product,
        'stock_product': this.products.stock_product,
        'category': this.products.category
      });
      console.log(productId);
      console.log(this.editForm.value);
    })
  }

  submit(data: any) {
    if (this.products) {
      data.id_product = this.products.id_product;
    }
    this.productsService.update(data).subscribe((result) => {
      if (result) {
        Swal.fire({
          icon: 'success',
          title: 'Actualizado con Exito',
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
