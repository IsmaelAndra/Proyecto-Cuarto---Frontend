import { Component, OnInit } from '@angular/core';
import { ShopppingCartModel, ShopppingCartModelTotals } from '../shopping-cart/entities/shopping-cart.entity';
import { ShoppingCartService } from '../shopping-cart/services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  storeModel: ShopppingCartModel[] = [];
  totales: ShopppingCartModelTotals = {
    subtotal: 0,
    iva: 0,
    total: 0,
    cantidadTotal: 0
  };

  constructor(private router: Router, private shoppingCartService: ShoppingCartService) {
    this.storeModel = shoppingCartService.shopppingCartModel;
    this.totales = shoppingCartService.totales;
  }

  ngOnInit(): void {
  }

  eliminarItem(store: ShopppingCartModel) {
    this.shoppingCartService.eliminarItem(store);
  }
}
