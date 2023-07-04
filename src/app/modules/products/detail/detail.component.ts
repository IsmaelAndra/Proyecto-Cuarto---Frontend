import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../entities/product.model';
import Swal from 'sweetalert2';
import { ShoppingCartService } from '../../shopping-cart/services/shopping-cart.service';
import { ShopppingCartModel } from '../../shopping-cart/entities/shopping-cart.entity';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  constructor(private productsService: ProductsService, private router: Router, private activerouter: ActivatedRoute, private shoppingCartService: ShoppingCartService) {}

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

  agregarAlCarrito(products: any): void {
    const carritoItem: ShopppingCartModel = {
      id_cart: products.id_product,
      name_cart: products.name_product,
      price_cart: products.price_product,
      images_cart: products.images_product,
      amount_cart: 0,
      subtotal_cart: 0
    };
    this.shoppingCartService.agregarItem(carritoItem);
    Swal.fire({
      icon: 'success',
      title: 'Agregado con Exito',
      showConfirmButton: false,
      timer: 1500
    })
  }

  meEncanta(){
    (document.querySelector("#MeEncanta") as HTMLElement).style.color = "white";
    (document.querySelector("#MeEncanta") as HTMLElement).style.backgroundColor = "red";
  }

  noMeEncanta(){
    (document.querySelector("#MeEncanta") as HTMLElement).style.color = "gray";
    (document.querySelector("#MeEncanta") as HTMLElement).style.backgroundColor = "rgb(223, 223, 223)";
  }

  ngOnInit(): void {
    let productId = this.activerouter.snapshot.paramMap.get('id');
    this.productsService.getOne(productId).subscribe(data =>{
      this.products = data;
      console.log(this.products);
    })
  }
}
