import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../entities/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly apiUrl = 'https://api.escuelajs.co/api/v1/products';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<ProductModel[]> {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<ProductModel[]>(url);
  }

  getOne(id: ProductModel['id']): Observable<ProductModel>{
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<ProductModel>(url);
  }

  store(product: CreateProductDto):Observable<ProductModel> {
    const url = `${this.apiUrl}`;
    return this.httpClient.post<ProductModel>(url, product)
  }

  update(product: UpdateProductDto): Observable<ProductModel> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.httpClient.put<ProductModel>(url, product)
  }

  destroy(id: ProductModel['id']):Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}
