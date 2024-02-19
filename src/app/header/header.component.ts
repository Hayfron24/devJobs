import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})

export class HeaderComponent{
    btnImg = "../../assets/desktop/btn-light-mode.svg";
    btn = <HTMLButtonElement> document.getElementById("light-mode");
    darkElements = document.querySelectorAll('body, .hearder') as NodeListOf<HTMLElement>;
    originalBackgroundColor = window.getComputedStyle(document.body).backgroundColor;


    isDarkMode = false;

    onChangeBtn (){
       this.isDarkMode = !this.isDarkMode;
        this.btnImg = this.isDarkMode ? "../../assets/desktop/btn-dark-mode.svg" : "../../assets/desktop/btn-light-mode.svg";

        this.darkElements.forEach( element =>{
            element.style.backgroundColor = this.isDarkMode? '#19202D' : this.originalBackgroundColor;
        })
    }
}