import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';

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
    private apiService: ApiServiceService
  ) {}

  ngOnInit() {}

  register() {
    this.apiService.register(this.form).subscribe(
      (response:any) => {
        // Set localStorage
        localStorage.setItem('name', this.form.name);
        localStorage.setItem('email', this.form.email);
        localStorage.setItem('password', this.form.password);
        
        // Redirect to list-books
        this.router.navigateByUrl('login');
      },
      (error:any) => {
        console.log(error);
      }
    );
  }
}
