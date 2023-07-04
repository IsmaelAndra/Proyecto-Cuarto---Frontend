import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UserModel } from '../entities/user.model';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  constructor(private userService: UserService, private router: Router, private activerouter: ActivatedRoute){}

  users: UserModel = {
    photo_user: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg',
    name_user: '',
    lastname_user: '',
    mail_user: '',
    address_user: '',
    phone_user: '',
    date_of_birth_user: new Date(),
    password_user: '',
    password_validation_user: '',
    status_user: false
  };
  
  editForm = new FormGroup({
    photo_user: new FormControl('https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'),
    name_user: new FormControl(''),
    lastname_user: new FormControl(''),
    mail_user: new FormControl(''),
    address_user: new FormControl(''),
    phone_user: new FormControl(''),
    date_of_birth_user: new FormControl(new Date()),
    status_user: new FormControl(false)
  })

  ngOnInit(): void {
    let userId = this.activerouter.snapshot.paramMap.get('id');
    this.userService.getOne(userId).subscribe(data => {
      this.users = data;
      this.editForm.setValue({
        'photo_user': this.users.photo_user,
        'name_user': this.users.name_user,
        'lastname_user': this.users.lastname_user,
        'mail_user': this.users.mail_user,
        'address_user': this.users.address_user,
        'phone_user': this.users.phone_user,
        'date_of_birth_user': this.users.date_of_birth_user,
        'status_user': this.users.status_user
      });
      console.log(userId);
      console.log(this.editForm.value);
    })
  }

  submit(data: any) {
    if (this.users) {
      data.id_user = this.users.id_user;
    }
    this.userService.update(data).subscribe((result) => {
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
      this.router.navigate(['users/profile', data.id_user])
    }, 1700);
    console.log(data);
  }

  regresar(id_user: UserModel['id_user']) {
    this.router.navigate(['users/profile', id_user]);
  }
}
