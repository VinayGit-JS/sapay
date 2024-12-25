import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleNavbar(){
      const header = document.querySelector("header") as HTMLElement;
      if(header.classList.contains("active")){
        header.classList.remove("active")
      }
      else{
        header.classList.add("active")
      }
  }
}
