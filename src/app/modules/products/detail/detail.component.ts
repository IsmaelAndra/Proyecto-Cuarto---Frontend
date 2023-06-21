import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../entities/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  constructor(private productsService: ProductsService, private router: Router, private activerouter: ActivatedRoute) {}

  products: ProductModel = {
    name: '',
    price: 0,
    description: '',
    detailedDescription: '',
    images: '',
    status: true,
    stock: 0,
    category: 0
  };

  ngOnInit(): void {
    let productId = this.activerouter.snapshot.paramMap.get('id');
    this.productsService.getOne(productId).subscribe(data =>{
      this.products = data;
      console.log(this.products);
    })
  }
}
