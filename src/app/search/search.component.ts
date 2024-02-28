import { EventEmitter, Component, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output () searchChanged = new EventEmitter<string>();
  searchTerm: string = '';

  onSearchChange(){
    this.searchChanged.emit(this.searchTerm);
  }

}
