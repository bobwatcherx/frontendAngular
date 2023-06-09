import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  tokenkey: any;
  books: any[] = [];
  apiUrl = "https://book-store-bobwatcherx.vercel.app/api"
  constructor(
    private http: HttpClient
  ) { }
public addProduct(productData: any): Observable<any> {
    return this.http.post<any>(`https://book-store-bobwatcherx.vercel.app/api/api/create/product`, productData);
  }
 public deleteBook(bookId: string): Observable<any> {
    const url = `https://book-store-bobwatcherx.vercel.app/api/api/delete/products/${bookId}`;
    return this.http.delete<any>(url);
  }

 public updateProduct(id: number, product: any): Observable<any> {
    const url = `https://book-store-bobwatcherx.vercel.app/api/api/products/${id}`;
    return this.http.put(url, product);
  }


 public getHistoryBayar(): Observable<any> {
    return this.http.get<any>('https://book-store-bobwatcherx.vercel.app/api/api/historybayar');
  }
  // public register(form: any) {
  //   return this.http.post(
  //     environment.ApiURL + 'api/admin/register',
  //     {
  //       email: form.email,
  //       password: form.password,
  //     },
  //     { responseType: 'json' }
  //   );
  // }
  register(formData: any): Observable<any> {
    return this.http.post('https://book-store-bobwatcherx.vercel.app/api/api/register', formData, { responseType: 'json' });
  }
   getProductById(id: number): Observable<any> {
    const url = `https://book-store-bobwatcherx.vercel.app/api/api/search/products/${id}`;
    return this.http.get<any>(url);
  }

   public fixbayar(form: any) {
    return this.http.post(
      'https://book-store-bobwatcherx.vercel.app/api/api/bayar',
      {
        nama_barang: form.nama_barang,
        email: form.email,
        grandtotal: form.grandtotal,
        harga_satuan: form.harga_satuan,
      },
      { responseType: 'json' }
    );
  }
  Login(form: any) {
    return this.http.post(
      'https://book-store-bobwatcherx.vercel.app/api/api/login',
      {
        email: form.email,
        password: form.password,
      },
      // { responseType: 'json' }
    );
  }

 GetListBooks() {
  return this.http.get('https://book-store-bobwatcherx.vercel.app/api/api/products');
}



  CreateBook(form: any,headers:any) {
    // const headers = new HttpHeaders({
    //   responseType: 'json',
    //   Authorization: `Bearer ` + localStorage.getItem('token'),
    // });
    

    return this.http.post<any>(
      'https://book-store-bobwatcherx.vercel.app/api/api/admin/products',
      form,
      { headers:headers }
    );
  }
  
  UpdateBooks( id : any, form : any){
   return this.http.post('https://book-store-bobwatcherx.vercel.app/api/api/admin/products',
   {
      "judul" : 'judul',
      "author" : 'author',
      "products_price" : 'products_price',
      "sinopsis" : 'sinopsis',
      "user_email" : 'user_email',
      "products_type" : 'products_type',
      "status_products" : 'status_products'
  
   },
  //  { responseType: 'json'}
   );
  }

  public DeleteBooks(id :any) {
    return this.http.delete('https://book-store-bobwatcherx.vercel.app/api/api/admin/delete-products/20');
  }
  }

