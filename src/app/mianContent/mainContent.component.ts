import { Component } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-main-content',
    templateUrl: './mainContent.component.html',
    styleUrl: './mainContent.component.css',
})

export class MainContentComponent {
    data: any;
    displayedCards: any[] = [];
    cardsPerPage: number = 6;
    
    



    constructor(private router: Router ,private dataService: DataService) {}

    ngOnInit (): void {
        this.dataService.getData().subscribe((result) => {
            this.data = result;
            
            this.displayedCards = this.data.slice(0, this.cardsPerPage); 
            console.log(this.data);
            console.log(this.displayedCards);
     });
    }
    

    loadMore() {
        const startIndex = this.displayedCards.length;
        const endIndex = startIndex + 3; 
        this.displayedCards.push(...this.data.slice(startIndex, endIndex));
    }


}