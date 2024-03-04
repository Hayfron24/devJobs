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
    searchTerm: string = '';

    showLoadMoreButton: boolean = true; // Add this line at the top of your component class
    location: string = ''; // Add this line at the top of your component class
    fullTimeOnly: boolean = false; // Add this line at the top of your component class


    
    



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
        const newItems = this.data.slice(startIndex, endIndex);

        if (this.searchTerm || this.location || this.fullTimeOnly) {
            const filteredNewItems = newItems.filter((item: { company: string; position: string; contract: string; location: string; }) =>
                (item.company && item.company.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
                (item.position && item.position.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
                (item.contract && item.contract.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
                (item.location && item.location.toLowerCase().includes(this.location.toLowerCase())) ||
                (this.fullTimeOnly && item.contract && item.contract.toLowerCase() === 'full time')
            );

            this.displayedCards = this.displayedCards.concat(filteredNewItems);

            // Check if there are more matching items, hide the "Load more" button if not
            if (startIndex + filteredNewItems.length >= this.data.length) {
                this.showLoadMoreButton = false;
            }
        } else {
            this.displayedCards = this.displayedCards.concat(newItems);

            // Check if there are more items, hide the "Load more" button if not
            if (startIndex + newItems.length >= this.data.length) {
                this.showLoadMoreButton = false;
            }
        }
    }
      


    goToDetailsPage(cardId: number): void {
        this.router.navigate(['/details', cardId]);
        console.log(cardId);
                
    }

    applySearchFilter(eventData: { searchTerm: string, location: string, fullTimeOnly: boolean }) {
        console.log('Search Term:', eventData);
    
        if (eventData.searchTerm || eventData.location || eventData.fullTimeOnly) {
            this.displayedCards = this.data
                .filter((item: { company: string; position: string; contract: string; location: string; }) =>
                    (!eventData.searchTerm || (item.company && item.company.toLowerCase().includes(eventData.searchTerm.toLowerCase())) ||
                                              (item.position && item.position.toLowerCase().includes(eventData.searchTerm.toLowerCase())) ||
                                              (item.contract && item.contract.toLowerCase().includes(eventData.searchTerm.toLowerCase()))) &&
                    (!eventData.location || (item.location && item.location.toLowerCase().includes(eventData.location.toLowerCase()))) &&
                    (!eventData.fullTimeOnly || (eventData.fullTimeOnly && item.contract && item.contract.toLowerCase() === 'full time'))
                );
    
            this.showLoadMoreButton = false; // Disable the "Load more" button when filtering
        } else {
            this.displayedCards = this.data.slice(0, this.cardsPerPage);
            this.showLoadMoreButton = true; // Enable the "Load more" button when using default cards
        }
    }

}