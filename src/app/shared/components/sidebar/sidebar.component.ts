import { Component } from '@angular/core';
import { TokenService } from 'src/app/modules/auth/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private tokenService:TokenService){
    this.nombreUsuario = this.tokenService.getUserNameFromToken();
    this.mailUsuario = this.tokenService.getUserMailFromToken();
    this.photoUsuario = this.tokenService.getUserPhotoFromToken();
  }
  mailUsuario: string | null = null ;
  nombreUsuario: string | null = null ;
  photoUsuario: string | null = null ;
}
