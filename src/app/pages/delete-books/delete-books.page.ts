import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/api/api-service.service';


@Component({
  selector: 'app-delete-books',
  templateUrl: './delete-books.page.html',
  styleUrls: ['./delete-books.page.scss'],
})
export class DeleteBooksPage implements OnInit {

  id : any;

  constructor(
    private api : ApiServiceService,
    private alert : AlertController
  ) { }

  // private async presentAlert(title : any, message : any) {
  //   const alert = await this.alert.create({
  //     header: 'Sample Form',
  //     subHeader: title,
  //     message: message,
  //     buttons: ['OK']
  //   });

  //   await alert.present();
  // }

  // doDeleteBooks(){
  //   this.api.DeleteBooks(this.id)
  //           .subscribe( data => {
  //             this.presentAlert('Berhasil' , 'Anda Sudah Delete Data buku Dengan ID : '+ this.id);  
  //           },
  //           err => {
  //             console.error('Gagal Delete buku ===> ', err.status);
  //             this.presentAlert('Gagal Delete buku', 'Delete buku gagal. Silahkan cek kembali jaringan internet anda.');
  //           });
  // }

  // submitWithValidateFormInput(){

  //   var doSubmitForm = true;

  //   if(this.id == null || this.id == ''){
  //     this.presentAlert('Peringatan' , 'Anda Belum Input Data ID');
  //     doSubmitForm = false;
  //   }

  //   if(doSubmitForm){
  //     this.doDeleteBooks();
  //   }

  // }

  ngOnInit() {
  }

}
