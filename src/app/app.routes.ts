import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { RefundPolicyComponent } from './features/refund-policy/refund-policy.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';

// Define the application routes
export const appRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },  // Redirect to home page by default
    { path: '', component: HomeComponent },  // Home page route
    { path: 'about', component: AboutComponent },  // About page route
    { path: 'contact', component: ContactComponent },  // contact page route
    { path: 'refund-policy', component: RefundPolicyComponent },  // refund policy route
    { path: 'privacy-policy', component: PrivacyPolicyComponent },  // refund policy route
    { path: '**', component: NotFoundComponent },  // not found route if any route not match




];
