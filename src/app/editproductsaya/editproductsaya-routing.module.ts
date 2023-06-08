import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditproductsayaPage } from './editproductsaya.page';

const routes: Routes = [
  {
    path: '',
    component: EditproductsayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditproductsayaPageRoutingModule {}
