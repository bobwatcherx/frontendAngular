import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBooksPage } from './update-books.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBooksPageRoutingModule {}
