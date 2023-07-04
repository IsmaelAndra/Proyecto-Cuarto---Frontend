import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserModel } from '../entities/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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

  constructor(private userService: UserService, private router: Router, private activerouter: ActivatedRoute){}

  ngOnInit(): void {
    let userId = this.activerouter.snapshot.paramMap.get('id');
    this.userService.getOne(userId).subscribe(data =>{
      this.users = data;
      console.log(this.users);
    })
  }

  editarUser(id_user: UserModel['id_user']) {
    this.router.navigate(['users/editar-user', id_user]);
  }
}
