
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminPanelComponent} from "./admin-panel.component";
import {AboutComponent} from "../../components/about/about.component";


const adminPanelRoutes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
        ]
      }
    ]
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminPanelRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminPanelRoutingModule {}


