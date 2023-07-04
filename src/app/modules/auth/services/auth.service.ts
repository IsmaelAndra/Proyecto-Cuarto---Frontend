import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthModel } from '../entities/auth.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  readonly API_URL: string = "http://localhost:3000/auth/";

  login(dto: UserAuthModel):Observable<any>{
    return this.httpClient.post<any>(this.API_URL + 'login', dto);
  }
}
