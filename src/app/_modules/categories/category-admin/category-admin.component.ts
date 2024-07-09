import { Component, OnInit } from '@angular/core';
import { CategoryCreateAdminComponent } from '../category-create-admin/category-create-admin.component';
import { RouterOutlet } from '@angular/router';
import { CategorySerivces } from 'src/app/_services/categories/category.service';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css'],
  standalone: true,
  imports: [
    RouterOutlet
  ]
})
export class CategoryAdminComponent implements OnInit {
  data: any;
  constructor(
    private categoryServices: CategorySerivces
  ) { }
  
  ngOnInit() {
    this.getDataCategory();
  }

  getDataCategory(){
    this.categoryServices.getDataCategory().subscribe((res: any) => {
      this.data = res;
      console.log(res);
    },(err: any) => {
      console.log(err);
    })
  }

}
