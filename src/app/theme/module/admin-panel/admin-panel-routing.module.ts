
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminPanelComponent} from "./admin-panel.component";
import {AdminPanelIComponent} from "../../components/admin-panel/admin-panel.component";
import {MonumentShowIComponent} from "../../components/show/monument/monument.component";
import {ShowIComponent} from "../../components/show/show.component";


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
            {path: '', component: AdminPanelIComponent},
            {path: 'show', component: ShowIComponent}
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


