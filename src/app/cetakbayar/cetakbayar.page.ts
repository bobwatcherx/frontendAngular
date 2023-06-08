import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cetakbayar',
  templateUrl: './cetakbayar.page.html',
  styleUrls: ['./cetakbayar.page.scss'],
})
export class CetakbayarPage implements OnInit {
  nama_barang!: string;
  email!: string;
  grandtotal!: string | null;
  harga_satuan!: string | null;

  constructor(private route: ActivatedRoute) {}
   printAsPdf() {
    window.print();
  }
  ngOnInit() {
    this.nama_barang = this.route.snapshot.paramMap.get('nama_barang') || '';
    this.email = this.route.snapshot.paramMap.get('email') || '';
    this.grandtotal = this.route.snapshot.paramMap.get('grandtotal');
    this.harga_satuan = this.route.snapshot.paramMap.get('harga_satuan');
  }
}

