import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuardLogin} from "./theme/guard/LoginGuard";
import {AuthGuard} from "./theme/guard/auth-guard.service";


export const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
    path: 'admin-panel',
    loadChildren: 'app/theme/module/admin-panel/admin-panel.module#AdminPanelModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'data-download',
    loadChildren: 'app/theme/module/data-download/data-download.module#DataDownloadModule',
    canActivate: [AuthGuard],
  },
   {
    path: 'data-entry',
    loadChildren: 'app/theme/module/data-entry/data-entry.module#DataEntryModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'uploading-data',
    loadChildren: 'app/theme/module/uploading-data/uploading-data.module#UploadingDataModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'sampling',
    loadChildren: 'app/theme/module/sampling/sampling.module#SamplingModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'sampling',
    loadChildren: 'app/theme/module/sampling/sampling.module#SamplingModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'advanced-search',
    loadChildren: 'app/theme/module/advanced-search/advanced-search.module#AdvancedSearchModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'quick-search',
    loadChildren: 'app/theme/module/quick-search/quick-search.module#QuickSearchModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'command',
    loadChildren: 'app/theme/module/command/command.module#CommandModule',
    canActivate: [AuthGuard],
  },
  { path: '**',    component: NoContentComponent },
];
