import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/modules/products/entities/product.model';
import { ProductsService } from 'src/app/modules/products/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(data => {
      this.products = data;
    })
  }

  histories(){
    this.router.navigate(['history']);
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

  deleteProduct(id: ProductModel['id']) {

    Swal.fire({
      title: '¿Estas seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, remuevelo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Removido con Exito',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          this.productsService.destroy(id).subscribe(
            response => {
              this.products = this.products.filter(product => product.id != id);
              console.log(response);
              (document.querySelector("#menuCarrito") as HTMLElement).style.visibility = "hidden";
            }
          );
        }, 1700);
      }
    })
  }
}
