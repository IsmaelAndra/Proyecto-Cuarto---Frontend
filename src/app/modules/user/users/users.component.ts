import { Component, OnInit } from '@angular/core';
import { UserModel } from '../entities/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserModel[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    })
  }

  verUser(id_user: UserModel['id_user']) {
    this.router.navigate(['users/profile', id_user]);
  }

  deleteUser(id_user: UserModel['id_user']) {
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
          this.userService.destroy(id_user).subscribe(
            response => {
              this.users = this.users.filter(user => user.id_user != id_user);
              console.log(response);
              this.router.navigate(['/users']);
            }
          );
        }, 1700);
      }
    })
  }
}
