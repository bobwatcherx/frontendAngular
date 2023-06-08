import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteBooksPage } from './delete-books.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteBooksPageRoutingModule {}
