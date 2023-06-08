import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CetakbayarPage } from './cetakbayar.page';

const routes: Routes = [
  {
    path: '',
    component: CetakbayarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CetakbayarPageRoutingModule {}
