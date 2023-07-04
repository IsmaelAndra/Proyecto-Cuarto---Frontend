import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/modules/auth/services/token.service';
import { ShopppingCartModel, ShopppingCartModelTotals } from 'src/app/modules/shopping-cart/entities/shopping-cart.entity';
import { ShoppingCartService } from 'src/app/modules/shopping-cart/services/shopping-cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  shopppingCartModel: ShopppingCartModel[] = [];
  totales: ShopppingCartModelTotals = {
    subtotal: 0,
    iva: 0,
    total: 0,
    cantidadTotal: 0
  };

  constructor(private router: Router, private shoppingCartService: ShoppingCartService, private tokenService:TokenService) {
    this.shopppingCartModel = shoppingCartService.shopppingCartModel;
    this.totales = shoppingCartService.totales;
    this.idUsuario = this.tokenService.getUserIdFromToken();
    this.nombreUsuario = this.tokenService.getUserNameFromToken();
    this.mailUsuario = this.tokenService.getUserMailFromToken();
    this.photoUsuario = this.tokenService.getUserPhotoFromToken();
  }

  ngOnInit(): void {
  }

  eliminarItem(item: ShopppingCartModel) {
    this.shoppingCartService.eliminarItem(item);
  }

  proceder(){
    this.router.navigate(['store/store']);
    (document.querySelector("#menuCarrito") as HTMLElement).style.visibility = "hidden";
  }

  histories(){
    this.router.navigate(['histories']);
  }

  abrirMenuUsuario() {
    (document.querySelector("#menuUsuario") as HTMLElement).style.visibility = "visible";
    (document.querySelector("#menuCarrito") as HTMLElement).style.visibility = "hidden";
  }

  cerrarMenuUsuario(){
    (document.querySelector("#menuUsuario") as HTMLElement).style.visibility = "hidden";
  }

  abrirMenuCarrito() {
    (document.querySelector("#menuCarrito") as HTMLElement).style.visibility = "visible";
    (document.querySelector("#menuUsuario") as HTMLElement).style.visibility = "hidden";
  }

  cerrarMenuCarrito(){
    (document.querySelector("#menuCarrito") as HTMLElement).style.visibility = "hidden";
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
    (document.querySelector("#menuUsuario") as HTMLElement).style.visibility = "hidden";
  }

  nombreUsuario: string | null = null ;
  idUsuario: string | null = null ;
  photoUsuario: string | null = null ;
  mailUsuario: string | null = null ;

  profile(){
    this.router.navigate(['users/profile', this.idUsuario]);
  }
}
