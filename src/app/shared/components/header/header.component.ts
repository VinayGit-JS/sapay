import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],
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

  // dynamic routes with active tab status 

  navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Services', path: '/services' },
    { label: 'Career', path: '/career' },
    { label: 'About us', path: '/about-us' },
    { label: 'Product', path: '/product' },
    { label: 'Contact us', path: '/contact' }
  ];

  activePath: string = '/home'; // Default active path

  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribe to router events to update the activePath
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activePath = event.urlAfterRedirects; // Update the activePath based on the current route
      }
    });
  }

  setActive(path: string) {
    this.activePath = path;
  }

  isActive(path: string): boolean {
    return this.activePath === path;
  }
}
