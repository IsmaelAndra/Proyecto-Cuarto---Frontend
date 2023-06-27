import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../../user/services/user.service';
import { Router } from '@angular/router';
import { UserModel } from '../../user/entities/user.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
  }

  users: UserModel = {
    photo_user: '',
    name_user: '',
    lastname_user: '',
    mail_user: '',
    address_user: '',
    phone_user: '',
    date_of_birth_user: '',
    password_user: '',
    password_validation_user: '',
    status_user: false
  };

  nuevoUser = new FormGroup({
    photo_user: new FormControl(''),
    name_user: new FormControl(''),
    lastname_user: new FormControl(''),
    mail_user: new FormControl(''),
    address_user: new FormControl(''),
    phone_user: new FormControl(''),
    date_of_birth_user: new FormControl(''),
    password_user: new FormControl(''),
    password_validation_user: new FormControl(''),
    status_user: new FormControl(false)
  })

  submit(data: any) {
    if (this.users) {
      data.id_product = this.users.id_user;
    }
    this.userService.store(data).subscribe((result) => {
      if (result) {
        Swal.fire({
          icon: 'success',
          title: 'Registrado con Exito',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 1700);
    console.log(data);
  }
}
