import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.page.html',
  styleUrls: ['./list-books.page.scss'],
})
export class ListBooksPage implements OnInit {
  counter: number = 1;
  books: any[] = [];

  constructor(private api: ApiServiceService, private router: Router) { }

  increment() {
    this.counter++;
  }
logout() {
    // Menghapus data dari local storage
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    console.log('berhasil');

    // Melakukan pengalihan halaman ke '/login' dengan replaceUrl true
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
  decrement() {
    if (this.counter > 1) {
      this.counter--;
    }
  }

  doCheckout(judul: string, price: number,gambar:string,sinopsis:string) {
  const subtotal = this.counter * price;
  const discount = subtotal * 0.1;
  const grandtotal = (subtotal - discount) - 10;

  const navigationExtras: NavigationExtras = {
    state: {
      counter: this.counter,
       judul: judul,
      price: price,
      gambar:gambar,
      sinopsis:sinopsis,
      grandtotal:grandtotal
    }
  };

  this.router.navigateByUrl('checkout', navigationExtras);
}

  detail(book: any) {
  // Akses detail buku dengan menggunakan variabel 'book'
  console.log(book);
  this.router.navigateByUrl('detail');
}

  ngOnInit() {
    this.getListBooks();
  }

  getListBooks() {
    this.api.GetListBooks().subscribe((res: any) => {
      this.books = res;
      console.log(res);
    });
  }
}
