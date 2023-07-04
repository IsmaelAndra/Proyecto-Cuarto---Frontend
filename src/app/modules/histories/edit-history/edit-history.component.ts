import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HistoryModel } from '../entities/histories.model';
import { HistoriesService } from '../services/histories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-history',
  templateUrl: './edit-history.component.html',
  styleUrls: ['./edit-history.component.css']
})
export class EditHistoryComponent implements OnInit {
  
  constructor(private historiesService: HistoriesService, private router: Router, private activerouter: ActivatedRoute) {}

  histories: HistoryModel = {
    title_history: '',
    images_history: '',
    description_history: '',
    createAt: new Date(),
    updateAt: new Date()
  };

  editForm = new FormGroup({
    title_history: new FormControl(''),
    images_history: new FormControl(''),
    description_history: new FormControl('')
  })

  ngOnInit(): void {
    let historyId = this.activerouter.snapshot.paramMap.get('id');
    this.historiesService.getOne(historyId).subscribe(data => {
      this.histories = data;
      this.editForm.setValue({
        'title_history': this.histories.title_history,
        'images_history': this.histories.images_history,
        'description_history': this.histories.description_history
      });
      console.log(historyId);
      console.log(this.editForm.value);
    })
  }

  submit(data: any) {
    if (this.histories) {
      data.id_history = this.histories.id_history;
    }
    this.historiesService.update(data).subscribe((result) => {
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
      this.router.navigate(['/histories'])
    }, 1700);
    console.log(data);
  }

  regresar() {
    this.router.navigate(['/histories']);
  }
}
