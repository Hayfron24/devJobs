import { EventEmitter, Component, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output () searchChanged = new EventEmitter<{ searchTerm: string, location: string, fullTimeOnly: boolean }>();


  searchTerm: string = '';
  location: string = '';
  fullTimeOnly: boolean = false;


  onSearchChange(){
    const searchData = {
      searchTerm: this.searchTerm,
      location: this.location,
      fullTimeOnly: this.fullTimeOnly
    };

    this.searchChanged.emit(searchData);

  }

}
