import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  cardDetails: any;

  constructor(private route: ActivatedRoute ,private details: DataService){}


  ngOnInit(): void {
    const cardId = this.route.snapshot.params['cardId'];

    this.details.getData().subscribe(data => {
      this.cardDetails = data.find((card:any) => card.id === +cardId);
    } );
  }

}
