import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FixedComponent } from "./shared/components/fixed/fixed.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CarouselModule, FixedComponent],
})
export class AppComponent {
  title = 'fantasy';
}
