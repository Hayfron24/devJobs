import { Component, HostBinding } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'devJobs';
  // btn = document.getElementById('light-mode');
  isDarkMode = false;

  constructor(private dataService: DataService) {
    this.dataService.isDarkMode$.subscribe(isDarkMode => {
      // Use the current value of isDarkMode here
      console.log('Dark mode is:', isDarkMode);
      this.isDarkMode = isDarkMode;  // Assign the value to a property in AppComponent

    });
  }
 
  @HostBinding('class.dark') get mode() { 
    return this.isDarkMode;
  }

}

