import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductModel } from '../entities/product.model';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { TokenService } from '../../auth/services/token.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService, private router: Router, private tokenService:TokenService) {
    this.nombreUsuario = this.tokenService.getUserNameFromToken();
    this.idUsuario = this.tokenService.getUserIdFromToken();
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(data => {
      this.products = data;
    })
    this.tokenService.getUserNameFromToken();
  }

  verProduct(id_product: ProductModel['id_product']) {
    this.router.navigate(['products/detail-product', id_product]);
  }

  editarProduct(id_product: ProductModel['id_product']) {
    this.router.navigate(['products/editar-product', id_product]);
  }

  nuevoProduct() {
    this.router.navigate(['products/nuevo-product']);
  }

  deleteProduct(id_product: ProductModel['id_product']) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Eliminado con Exito',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          this.productsService.destroy(id_product).subscribe(
            response => {
              this.products = this.products.filter(product => product.id_product != id_product);
              console.log(response);
              this.router.navigate(['/products']);
            }
          );
        }, 1700);
      }
    })
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }

  nombreUsuario: string | null = null ;

  idUsuario: string | null = null ;

  getUserNameFromToken() {
    this.nombreUsuario = this.tokenService.getUserNameFromToken();
  }

  getUserIdFromToken() {
    this.idUsuario = this.tokenService.getUserIdFromToken();
  }
}
