import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './theme/components/about/about.component';
import { NoContentComponent } from './no-content';


export const ROUTES: Routes = [
  {path: 'about', component: AboutComponent},
  { path: '',    component: NoContentComponent },
  { path: '**',    component: NoContentComponent },
];
