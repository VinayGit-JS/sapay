import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {



  sportsAndGames: any;


  constructor() { }

  ngOnInit(): void {


    this.sportsAndGames = {
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    };
    const carousels = document.querySelectorAll(".carousel") as NodeListOf<Element>
    console.log(carousels)
    setInterval(() => {
      carousels.forEach((item, index) => {
        var itemWidth = item.querySelector("div")?.clientWidth;
        if (itemWidth) {
          if (item.scrollWidth - itemWidth > item.scrollLeft + itemWidth) {
            item.scrollTo({ left: item.scrollLeft + itemWidth, top: 0, behavior: "smooth" })
          }
          else {
            item.scrollTo({ left: 0, top: 0, behavior: "smooth" })
          }
        }
      })
    }, 5000)
  }
}
