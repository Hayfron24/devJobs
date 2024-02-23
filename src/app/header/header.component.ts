import { Component, HostBinding } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})

export class HeaderComponent{
    btnImg = "../../assets/desktop/btn-light-mode.svg";
    // btn = <HTMLButtonElement> document.getElementById("light-mode");
    darkElements = document.querySelectorAll('body, .hearder, .search-bar') as NodeListOf<HTMLElement>;
    originalBackgroundColor = window.getComputedStyle(document.body).backgroundColor;

    isDarkMode = false;
    
    constructor(private themeService: DataService) {}
    
    onChangeBtn (){
       this.isDarkMode = !this.isDarkMode;
        this.btnImg = this.isDarkMode ? "../../assets/desktop/btn-dark-mode.svg" : "../../assets/desktop/btn-light-mode.svg";

        this.darkElements.forEach( element =>{
            element.style.backgroundColor = this.isDarkMode? '#121721' : this.originalBackgroundColor;
        })

        
        this.themeService.toggleDarkMode();
        
    }
    

}