import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.scss']
})
export class CategoryNavbarComponent implements OnInit {

  categoryServie: CategoriesService = inject(CategoriesService)

  categories!:any

  ngOnInit(): void {

    this.categoryServie.loadData().subscribe(val => {
      console.log(val);
      this.categories = val
    })
  }

}
