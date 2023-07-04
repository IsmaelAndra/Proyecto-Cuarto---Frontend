import { Injectable } from '@angular/core';
import { ShopppingCartModel, ShopppingCartModelTotals } from '../entities/shopping-cart.entity';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shopppingCartModel: ShopppingCartModel[] = [];
  totales: ShopppingCartModelTotals = {
    subtotal: 0,
    iva: 0,
    total: 0,
    cantidadTotal: 0
  };
  ivaPercentage = 0.12;

  private calcularTotales() {
    this.totales.cantidadTotal = this.shopppingCartModel.reduce((suma, item) => suma + item.amount_cart, 0);
    this.totales.subtotal = this.shopppingCartModel.reduce((suma, item) => suma + item.subtotal_cart, 0);
    this.totales.iva = Number(this.totales.subtotal) * Number(this.ivaPercentage);
    this.totales.total = Number(this.totales.subtotal) + Number(this.totales.iva);
  }

  agregarItem(item: ShopppingCartModel): void {
    const existingItem = this.shopppingCartModel.find(i => i.id_cart === item.id_cart);
    if (existingItem) {
      existingItem.amount_cart++;
      existingItem.subtotal_cart = Number(existingItem.price_cart) * Number(existingItem.amount_cart);
    } else {
      item.amount_cart = 1;
      item.subtotal_cart = Number(item.price_cart);
      this.shopppingCartModel.push(item);
    }
    this.calcularTotales();
  }

  eliminarItem(item: ShopppingCartModel) {
    const index = this.shopppingCartModel.indexOf(item);
    if (index > -1) {
      this.shopppingCartModel.splice(index, 1);
    }
    this.calcularTotales();
  }
}
