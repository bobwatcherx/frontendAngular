import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'create-books',
    loadChildren: () => import('./pages/create-books/create-books.module').then( m => m.CreateBooksPageModule)
  },
  {
    path: 'list-books',
    loadChildren: () => import('./pages/list-books/list-books.module').then( m => m.ListBooksPageModule)
  },
  {
    path: 'delete-books',
    loadChildren: () => import('./pages/delete-books/delete-books.module').then( m => m.DeleteBooksPageModule)
  },
  {
    path: 'update-books',
    loadChildren: () => import('./pages/update-books/update-books.module').then( m => m.UpdateBooksPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./confirm/confirm.module').then( m => m.ConfirmPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'historypayment',
    loadChildren: () => import('./historypayment/historypayment.module').then( m => m.HistorypaymentPageModule)
  },
  {
  path: 'cetakbayar/:nama_barang/:email/:grandtotal/:harga_satuan',
  loadChildren: () => import('./cetakbayar/cetakbayar.module').then(m => m.CetakbayarPageModule)
},
  {
    path: 'superadmin',
    loadChildren: () => import('./superadmin/superadmin.module').then( m => m.SuperadminPageModule)
  },
 {
  path: 'editproductsaya/:idproducts',
  loadChildren: () => import('./editproductsaya/editproductsaya.module').then(m => m.EditproductsayaPageModule)
},
  {
    path: 'tambahproduct',
    loadChildren: () => import('./tambahproduct/tambahproduct.module').then( m => m.TambahproductPageModule)
  },



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
