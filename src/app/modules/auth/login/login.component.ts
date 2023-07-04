import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { UserAuthModel } from '../entities/auth.entity';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private tokenService: TokenService, private router:Router, private location: Location){}

  user: UserAuthModel = {mail_user: '', password_user: ''};

  onLogins(): void {
    this.user = new UserAuthModel(this.user.mail_user, this.user.password_user);
    this.authService.login(this.user).subscribe(
      data => {
         if (!data.accessToke) {
          throw new Error('No existe el usuario')
         }else {
          this.tokenService.setToken(data.accessToke);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Iniciado Sesión con Exito',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
              this.router.navigate(['/dashboard']);
          }, 1700);
         }
        console.log(data.accessToke);
        this.tokenService.setToken(data.accessToke);
      }
    )
  }

  logIn() {
    console.log(this.user);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  }
}
