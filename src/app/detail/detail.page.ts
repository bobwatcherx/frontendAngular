import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  doCheckout(){

    this.router.navigateByUrl('checkout');
  }

  ngOnInit() {
  }

}