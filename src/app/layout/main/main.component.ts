import { Component, inject } from '@angular/core';
import { CategoryComponent } from '../../features/category/view/category/category.component';
import { TaskComponent } from '../../features/task/view/task/task.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CategoryComponent, MatDividerModule, TaskComponent],
  templateUrl: './main.component.html',
  styles: ``,
})
export class MainComponent {}
