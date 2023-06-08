import { Component , OnInit} from '@angular/core';
import { NavController,ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UtilService } from '../util.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  form = { 
    email : '',
    password : ''
  }

  constructor(
    private util: UtilService,
    private navCtrl:NavController,
    private router : Router,
    private toastController:
  ToastController
  ) {}

  ngOnInit() {}

  async login() {
    //Enable Side Menu
    this.util.setMenuState(true);

    console.log(this.from);

    try {
      const res = await fetch(environment.ApiURL + '/api/login',{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.form.email,
          password: this.form.password
        })
      });

      const data = await res.json();

      if (res.status !==200) {
        this.toastController.create({
          message: data.message,
          duration: 2000
        }).then(toast=>toast.present());

        return;
      }

      this.router.navigate(['/list-books']);
    } catch(error:any) {
      console.error(error);
    };
  }
  from(from: any) {
    throw new Error('Method not implemented.');
  }
  
  doLogin(){

    localStorage.setItem('email',this.form.email);
    localStorage.setItem('password',this.form.password);

    this.router.navigateByUrl('list-books');
    
  }

  doRegister(){

    this.router.navigateByUrl('register');
  }
}
