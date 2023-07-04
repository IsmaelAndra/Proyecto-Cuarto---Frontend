import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HistoriesService } from '../services/histories.service';
import { HistoryModel } from '../entities/histories.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-history',
  templateUrl: './new-history.component.html',
  styleUrls: ['./new-history.component.css']
})
export class NewHistoryComponent implements OnInit {
  constructor(private historiesService: HistoriesService, private router: Router, private activerouter: ActivatedRoute) {}

  ngOnInit(): void {
  }

  histories: HistoryModel = {
    title_history: '',
    images_history: '',
    description_history: '',
    createAt: new Date(),
    updateAt: new Date()
  };
  nuevoForm = new FormGroup({
    title_history: new FormControl(''),
    images_history: new FormControl(''),
    description_history: new FormControl('')
  })

  submit(data: any) {
    if (this.histories) {
      data.id_history = this.histories.id_history;
    }
    this.historiesService.store(data).subscribe((result) => {
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
      this.router.navigate(['/histories'])
    }, 1700);
    console.log(data);
  }

  regresar() {
    this.router.navigate(['/histories']);
  }
}
