import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UpdateUserDto, UserModel } from '../entities/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly apiUrl = 'http://localhost:3000/user';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<UserModel[]> {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<UserModel[]>(url);
  }

  getOne(id_user: UserModel['id_user']): Observable<UserModel>{
    const url = `${this.apiUrl}/${id_user}`;
    return this.httpClient.get<UserModel>(url);
  }

  store(user: UserModel):Observable<UserModel> {
    const url = `${this.apiUrl}`;
    return this.httpClient.post<UserModel>(url, user)
  }

  update(user: UpdateUserDto): Observable<UserModel> {
    const url = `${this.apiUrl}/${user.id_user}`;
    return this.httpClient.patch<UserModel>(url, user)
  }

  destroy(id_user: UserModel['id_user']):Observable<any> {
    const url = `${this.apiUrl}/${id_user}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}
