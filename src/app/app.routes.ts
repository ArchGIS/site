import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import {LoginComponent} from "./pages/login/login.component";


export const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {
    path: 'main',
    loadChildren: 'app/theme/module/main/main.module#MainModule'
  },
  { path: '**',    component: NoContentComponent },
];
