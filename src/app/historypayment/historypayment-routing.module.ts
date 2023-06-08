import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorypaymentPage } from './historypayment.page';

const routes: Routes = [
  {
    path: '',
    component: HistorypaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorypaymentPageRoutingModule {}
