import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateHistoryDto, HistoryModel, UpdateHistoryDto } from '../entities/histories.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriesService {

  readonly apiUrl = 'http://localhost:3000/event';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<HistoryModel[]> {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<HistoryModel[]>(url);
  }

  getOne(id_history: HistoryModel['id_history']): Observable<HistoryModel>{
    const url = `${this.apiUrl}/${id_history}`;
    return this.httpClient.get<HistoryModel>(url);
  }

  store(history: CreateHistoryDto): Observable<HistoryModel> {
    const url = `${this.apiUrl}`;
    return this.httpClient.post<HistoryModel>(url, history)
  }

  update(history: UpdateHistoryDto): Observable<HistoryModel> {
    const url = `${this.apiUrl}/${history.id_history}`;
    return this.httpClient.patch<HistoryModel>(url, history)
  }

  destroy(id_history: HistoryModel['id_history']): Observable<any> {
    const url = `${this.apiUrl}/${id_history}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}
