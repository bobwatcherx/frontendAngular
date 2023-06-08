import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  counter: number = 0;
  price: number = 0;
  judul: string = '';
  gambar: string = '';
  grandtotal: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiServiceService
  ) {}

  doConfirm() {
    const form = {
      nama_barang: this.judul,
      harga_satuan: this.price,
      grandtotal: this.grandtotal,
      email: localStorage.getItem('email') || ''
    };

    this.apiService.fixbayar(form).subscribe(
      (res: any) => {
        this.router.navigateByUrl('confirm');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    // Menerima data 'counter', 'price', 'judul', 'gambar', dan 'grandtotal' dari halaman sebelumnya
    const navigationState = this.router.getCurrentNavigation()?.extras?.state;
    if (navigationState) {
      this.counter = navigationState['counter'] || 0;
      this.price = navigationState['price'] || 0;
      this.judul = navigationState['judul'] || '';
      this.gambar = navigationState['gambar'] || '';
      this.grandtotal = navigationState['grandtotal'] || '';
    }
  }
}
