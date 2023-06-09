import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


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
    const docDefinition:TDocumentDefinitions = {
      content: [
        {
          text: 'Data Bayar',
          style: 'header'
        },
        {
          ul: [
            `Nama Barang: ${this.nama_barang}`,
            `Email: ${this.email}`,
            `Grand Total: ${this.grandtotal}`,
            `Harga Satuan: ${this.harga_satuan}`
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        }
      }
    };

    pdfMake.createPdf(docDefinition).download('halaman.pdf');
  }

  ngOnInit() {
    this.nama_barang = this.route.snapshot.paramMap.get('nama_barang') || '';
    this.email = this.route.snapshot.paramMap.get('email') || '';
    this.grandtotal = this.route.snapshot.paramMap.get('grandtotal');
    this.harga_satuan = this.route.snapshot.paramMap.get('harga_satuan');
  }
}
