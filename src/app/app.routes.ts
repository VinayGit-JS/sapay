import { Routes } from '@angular/router';
import { HomeComponent } from '../app/features/home/home.component';
import { AboutComponent } from '../app/features/about/about.component';
import { ProductsComponent } from '../app/features/products/products.component';
import { ContactComponent } from '../app/features/contact/contact.component';
import { RefundPolicyComponent } from '../app/features/refund-policy/refund-policy.component';
import { PrivacyPolicyComponent } from '../app/features/privacy-policy/privacy-policy.component';
import { NotFoundComponent } from '../app/features/not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirect to home page by default
  { path: 'home', component: HomeComponent },           // Home page route
  { path: 'about-us', component: AboutComponent },      // About page route
  { path: 'product', component: ProductsComponent },    // Product page route
  { path: 'contact', component: ContactComponent },     // Contact page route
  { path: 'refund-policy', component: RefundPolicyComponent }, // Refund policy route
  { path: 'privacy-policy', component: PrivacyPolicyComponent }, // Privacy policy route
  { path: '**', component: NotFoundComponent }          // Wildcard route for unmatched paths
];
