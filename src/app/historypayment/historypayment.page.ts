import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-historypayment',
  templateUrl: './historypayment.page.html',
  styleUrls: ['./historypayment.page.scss'],
})
export class HistorypaymentPage implements OnInit {
  data!: any[];

  constructor(private historyBayarService: ApiServiceService) { }

  ngOnInit() {
    this.getHistoryBayar();
  }

  getHistoryBayar() {
    this.historyBayarService.getHistoryBayar().subscribe(
      response => {
        this.data = response!; // Mengikat respons ke properti data
        console.log(this.data);
      },
      (error: any) => {
        console.log('Error:', error);
      }
    );
  }
}
