import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api/api-service.service';
import jwt_decode from 'jwt-decode';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form = {
    email: '',
    password: ''
  };

  constructor(
    private api : ApiServiceService,
    private router : Router,
      private toastController: ToastController
  ) {}

  ngOnInit() {
    
  }
  async presentToast(message: string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 2000, // Display duration in milliseconds
    position: 'bottom' // Set the position of the toast message
  });

  await toast.present();
}
    doLogin(){
      this.api.Login(this.form)
      .subscribe((res:any)=> {
        if (res.token) { 
          const decodedToken : any = jwt_decode(res.token); 
          // let showButton: boolean = true; 
 
          if (decodedToken.role === 'user') { 
            this.router.navigateByUrl('list-books'); 
            // showButton = false 
 
          } 
          if (decodedToken.role === 'admin') { 
            this.router.navigateByUrl('superadmin'); 
            // showButton = false 
 
          } 
        console.log(decodedToken)

          
          // if (showButton) { 
          //   this.presentAlert('Account Unavailable'); 
          // } 
        } 
 
        localStorage.setItem('email',this.form.email) 
        localStorage.setItem('token',res.token); 
        console.log('berhasil')
         this.presentToast('Berhasil login'); // Display success toast
      },err=>{ 
        // this.presentAlert('Account Unavailable'); 
        console.log('error')
        this.presentToast('username dan password Anda salah' ); // Display error toast
      }); 
    }
  
    doRegister(){
  
      this.router.navigateByUrl('register');
    }
  }




  

