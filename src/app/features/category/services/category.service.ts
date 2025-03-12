import { Category } from './../model/category.model';
import { environment } from './../../../../environments/environment.prod';
import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private readonly apiUrl = environment.apiUrl;
  private readonly httpCliente = inject(HttpClient);

  public categories = signal<Category[]>([]); // lista que começa vazia

  public getCategories(): Observable<Category[]> {
    // quando há uma nova emissão no observable, a função que estiver dentro do tap será executada
    return this.httpCliente
      .get<Category[]>(`${this.apiUrl}/categories`)
      .pipe(tap(categ => this.categories.set(categ))); // seta a resposta do sevidor em categories
  }
}
