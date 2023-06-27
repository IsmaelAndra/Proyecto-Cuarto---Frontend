import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../entities/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly apiUrl = 'http://localhost:3000/products';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<ProductModel[]> {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<ProductModel[]>(url);
  }

  getOne(id_product: ProductModel['id_product']): Observable<ProductModel>{
    const url = `${this.apiUrl}/${id_product}`;
    return this.httpClient.get<ProductModel>(url);
  }

  store(product: CreateProductDto):Observable<ProductModel> {
    const url = `${this.apiUrl}`;
    return this.httpClient.post<ProductModel>(url, product)
  }

  update(product: UpdateProductDto): Observable<ProductModel> {
    const url = `${this.apiUrl}/${product.id_product}`;
    return this.httpClient.patch<ProductModel>(url, product)
  }

  destroy(id_product: ProductModel['id_product']):Observable<any> {
    const url = `${this.apiUrl}/${id_product}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}
