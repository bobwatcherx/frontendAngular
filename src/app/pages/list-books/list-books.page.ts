import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';

interface Book {
  judul: string;
  harga: number;
  gambar: string;
  sinopsis: string;
  counter: number;
}

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.page.html',
  styleUrls: ['./list-books.page.scss'],
})
export class ListBooksPage implements OnInit {
  books: Book[] = [];

  constructor(private api: ApiServiceService, private router: Router) { }

  increment(book: Book) {
    book.counter++;
  }

  decrement(book: Book) {
    if (book.counter > 1) {
      book.counter--;
    }
  }

  logout() {
    // Menghapus data dari local storage
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    console.log('berhasil');

    // Melakukan pengalihan halaman ke '/login' dengan replaceUrl true
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  doCheckout(book: Book) {
    const { judul, harga, gambar, sinopsis } = book;
    const subtotal = book.counter * harga;
    const discount = subtotal * 0.1;
    const grandtotal = (subtotal - discount) - 10;

    const navigationExtras: NavigationExtras = {
      state: {
        counter: book.counter,
        judul: judul,
        price: harga,
        gambar: gambar,
        sinopsis: sinopsis,
        grandtotal: grandtotal
      }
    };

    this.router.navigateByUrl('checkout', navigationExtras);
  }

  detail(book: Book) {
    // Akses detail buku dengan menggunakan variabel 'book'
    console.log(book);
    this.router.navigateByUrl('detail');
  }

  ngOnInit() {
    this.getListBooks();
  }

  getListBooks() {
    this.api.GetListBooks().subscribe((res: any) => {
      this.books = res.map((bookData: any) => ({
        ...bookData,
        counter: 1
      }));
      console.log(res);
    });
  }
}
