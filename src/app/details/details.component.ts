import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent{
  data: any;

  constructor(private details: DataService){}


  ngOnInit(): void {
    this.details.getData().subscribe((result) => {
      this.data = result;
      console.log(this.data);
      
    })
  }

}
