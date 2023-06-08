import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api/api-service.service';
import jwt_decode from 'jwt-decode';

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
    
  ) {}

  ngOnInit() {
    
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

      },err=>{ 
        // this.presentAlert('Account Unavailable'); 
        console.log('error')
      }); 
    }
  
    doRegister(){
  
      this.router.navigateByUrl('register');
    }
  }




  

