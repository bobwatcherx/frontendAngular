import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-tambahproduct',
  templateUrl: './tambahproduct.page.html',
  styleUrls: ['./tambahproduct.page.scss']
})
export class TambahproductPage {
  productData: any = {
    judul: '',
    gambar: '',
    sinopsis: '',
    products_type: '',
    products_price: 0,
    status_products: '',
    user_email: '',
    author: ''
  };

  constructor(private productService: ApiServiceService, private router: Router) {}

  onSubmit() {
    this.productService.addProduct(this.productData).subscribe(
      (response: any) => {
        console.log(response);
        // Handle success response
        // Redirect to /superadmin
        this.router.navigate(['/superadmin']);
      },
      (error: any) => {
        console.log(error);
        // Handle error response
      }
    );
  }
}
