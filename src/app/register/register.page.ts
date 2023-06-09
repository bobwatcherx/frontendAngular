import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form = { 
    name: '',
    email: '',
    password: '',
    confirmation_password: ''
  };

  constructor(
    private router: Router,
    private apiService: ApiServiceService,
      private toastController: ToastController

  ) {}

  ngOnInit() {}
 async presentToast(message: string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 2000, // Display duration in milliseconds
    position: 'bottom' // Set the position of the toast message
  });

  await toast.present();
}
  register() {
    this.apiService.register(this.form).subscribe(
      (response:any) => {
        // Set localStorage
        localStorage.setItem('name', this.form.name);
        localStorage.setItem('email', this.form.email);
        localStorage.setItem('password', this.form.password);
        
        // Redirect to list-books
        this.router.navigateByUrl('login');
         this.presentToast('User berhasil dibuat'); // Display success toast

      },
      (error:any) => {
        console.log(error);
         this.presentToast("Error saat membuat User Baru"); // Display success toast

      }
    );
  }
}
