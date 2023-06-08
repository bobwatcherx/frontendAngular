import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.page.html',
  styleUrls: ['./create-books.page.scss'],
})
export class CreateBooksPage implements OnInit {
  form :any ={
    judul:'',
    author :'',
    products_price: '',
    sinopsis:'',
    user_email:'',
    products_type:'',
    status_products:''

  }
  token = localStorage.getItem('token')
  headers = new HttpHeaders(
    {
      'Authorization': `${this.token}`
    }
  );



  constructor(
     private api : ApiServiceService,
     private alert : AlertController
  ) { }

  private async presentAlert(title : any, message : any) {
    const alert = await this.alert.create({
      header: 'Sample Form',
      subHeader: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  doPostCreateBooks(){
    this.api.CreateBook(this.form,this.headers).subscribe( data => {
              const jsonResponse = JSON.parse(JSON.stringify(data));
              console.log(jsonResponse.id);
              console.log("Success ==> "+ JSON.stringify(data)); 
              this.presentAlert('Berhasil' , 'Anda Sudah Input Data User Dengan Benar'); 
            },
            err => {
              console.error('Gagal Create user ===> ', err.status);
              this.presentAlert('Gagal Create user', 'Create user gagal. Silahkan cek kembali jaringan internet anda.');
            });
  }

  doSubmitWithValidateFormInput(){

    var doSubmitForm = true;

    if(this.form.judul == null || this.form.judul == ''){
      this.presentAlert('Peringatan' , 'Anda Belum Input Data Judul Buku');
      doSubmitForm = false;
    }

    if(this.form.author == null || this.form.author == ''){
      this.presentAlert('Peringatan' , 'Anda Belum Input nama author');
      doSubmitForm = false;
    }

    if(this.form.products_price == null || this.form.products_price == ''){
      this.presentAlert('Peringatan' , 'Anda Belum Input Data harga');
      doSubmitForm = false;
    }

    if(this.form.sinopsis == null || this.form.sinopsis == ''){
      this.presentAlert('Peringatan' , 'Anda Belum Input Data sinopsis');
      doSubmitForm = false;
    }

    if (this.form.user_email == null || this.form.user_email == '') {
      this.presentAlert('Peringatan', 'Anda Belum Input Data User Email');
      doSubmitForm = false;
    }

    if (this.form.products_type == null || this.form.products_type == '') {
      this.presentAlert('Peringatan', 'Anda Belum Input Data Kategori');
      doSubmitForm = false;
    }

    if (this.form.status_products == null || this.form.status_products == '') {
      this.presentAlert('Peringatan', 'Anda Belum Input Data Kategori');
      doSubmitForm = false;
    }

    if(doSubmitForm){
      this.doPostCreateBooks();
    }

  }

  ngOnInit() {
  }

}
