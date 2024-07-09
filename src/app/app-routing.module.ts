import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAdminComponent } from './_modules/categories/category-admin/category-admin.component';

const routes: Routes = [
  {
    path: 'category',
    component: CategoryAdminComponent,
    children: [
      {
        path: 'create',
        component: CategoryAdminComponent
      }
    ]
  },
  {path: '', pathMatch: 'full', redirectTo: 'category'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
