import { Component } from '@angular/core';
import { HistoryModel } from '../entities/histories.model';
import { Router } from '@angular/router';
import { HistoriesService } from '../services/histories.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.css']
})
export class HistoriesComponent {
  histories: HistoryModel[] = [];

  constructor(private historiesService: HistoriesService, private router: Router){}

  ngOnInit(): void {
    this.historiesService.getAll().subscribe(data => {
      this.histories = data;
    })
  }

  editarHistory(id_history: HistoryModel['id_history']) {
    this.router.navigate(['histories/editar-history', id_history]);
  }

  nuevoHistory() {
    this.router.navigate(['histories/nuevo-history']);
  }

  deleteHistory(id_history: HistoryModel['id_history']) {
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
          this.historiesService.destroy(id_history).subscribe(
            response => {
              this.histories = this.histories.filter(product => product.id_history != id_history);
              console.log(response);
              this.router.navigate(['/histories']);
            }
          );
        }, 1700);
      }
    })
  }
}
