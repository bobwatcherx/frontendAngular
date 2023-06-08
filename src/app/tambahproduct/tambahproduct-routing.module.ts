import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahproductPage } from './tambahproduct.page';

const routes: Routes = [
  {
    path: '',
    component: TambahproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahproductPageRoutingModule {}
