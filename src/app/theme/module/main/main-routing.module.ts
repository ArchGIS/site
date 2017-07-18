
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { MainComponent} from "./main.component";
import {AboutComponent} from "../../components/about/about.component";
import {MainCountComponent} from "../../components/main/main.component";


const MainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
          {path: '', component: MainCountComponent},
          {path: 'about', component: AboutComponent},
          {path: 'info', component: MainCountComponent},
        ]
      }
    ]
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(MainRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule {}


