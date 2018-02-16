import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './theme/components/no-content';
import {LoginComponent} from "./theme/components/login/login.component";
import {AuthGuardLogin} from "./theme/guard/LoginGuard";
import {AuthGuard} from "./theme/guard/auth-guard.service";


export const ROUTES: Routes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardLogin]
  },
  {
    path: 'main',
    loadChildren: 'app/theme/module/main/main.module#MainModule',
    canActivate: [AuthGuard],
  },

  {
      path: '**',
      component: NoContentComponent
  },
];
