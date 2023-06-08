import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceService } from 'src/app/api/api-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.page.html',
  styleUrls: ['./superadmin.page.scss'],
})
export class SuperadminPage implements OnInit {
  books: any[] = [];

  constructor(private api: ApiServiceService, private router: Router) {}

  ngOnInit() {
    this.getListBooks();
  }
   logout() {
    // Menghapus data dari local storage
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    console.log('berhasil');

    // Melakukan pengalihan halaman ke '/login' dengan replaceUrl true
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
  getListBooks() {
    this.api.GetListBooks().subscribe(
      (res: any) => {
        this.books = res;
      },
      (error: any) => {
        console.log('Error:', error);
      }
    );
  }

  
   deleteBook(book: any) {
    const bookId = book.idproducts;

    this.api.deleteBook(bookId).subscribe(
      (response) => {
        console.log('Book deleted successfully');
        // Refresh the book list after deletion
        this.getListBooks();
      },
      (error) => {
        console.error('Error deleting book:', error);
        // Handle error scenarios
      }
    );
  }
}
