import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBooksPage } from './create-books.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBooksPageRoutingModule {}
