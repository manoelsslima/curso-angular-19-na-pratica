import { categoryBackgroundColors } from './../../constants/category-colors';
import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './colors-list.component.html',
  styles: ``,
})
export class ColorsListComponent {
  private readonly categoryService = inject(CategoryService);

  public categories = this.categoryService.categories;

  public categoryBackgroundColors = categoryBackgroundColors;
}
