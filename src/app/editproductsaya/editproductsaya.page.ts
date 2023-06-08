import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-editproductsaya',
  templateUrl: './editproductsaya.page.html',
  styleUrls: ['./editproductsaya.page.scss'],
})
export class EditproductsayaPage implements OnInit {
  bookId!: number;
  product: any = {}; // Initialize product property

   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ApiServiceService
  ) {}

 
  updateProduct() {
    const updatedProduct = {
      judul: this.product.judul,
      author: this.product.author,
      gambar: this.product.gambar,
      sinopsis: this.product.sinopsis,
      products_type: this.product.products_type,
      products_price: this.product.products_price,
      status_products: this.product.status_products,
      user_email: this.product.user_email
    };

    this.productService.updateProduct(this.bookId, updatedProduct).subscribe(
      (response) => {
        console.log('Product updated successfully');
        // Redirect to the product details page or any other logic
        this.router.navigate(['/superadmin']);
      },
      (error) => {
        console.error('Error updating product:', error);
        // Handle error scenarios
      }
    );
  }


   ngOnInit() {
   this.route.paramMap.subscribe(params => {
  const idproducts = params.get('idproducts');
  if (idproducts !== null) {
    this.bookId = Number(idproducts); // Ubah menjadi tipe number
    console.log('Book ID:', this.bookId);

    this.productService.getProductById(this.bookId).subscribe(
      (response) => {
        this.product = response;
        console.log('Product:', this.product);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  } else {
    console.error('Book ID is null');
  }
});


  }
  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     this.bookId = params.get('idproducts');
  //     console.log('Book ID:', this.bookId);
  //   });
  // }

}
