import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-main-list',
  standalone: true,
  imports: [],
  templateUrl: './main-list.component.html',
  styles: ``,
})
export class MainListComponent {
  private readonly categoryService = inject(CategoryService);

  // recebe a lista de categorias. Será iterada no @for
  public categories = this.categoryService.categories;
}
