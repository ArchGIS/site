
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminPanelIComponent} from "../../components/admin-panel/admin-panel.component";
import {MonumentShowIComponent} from "../../components/show/monument/monument.component";
import {ShowIComponent} from "../../components/show/show.component";
import {DeleteTableDialog, TableDataComponent} from "../../components/#lib/table-data/table-data.component";


const adminPanelRoutes: Routes = [
  {
    path: '',
    component: TableDataComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
            {path: '', component: TableDataComponent},
            {path: 'delete', component: DeleteTableDialog},
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
export class TableDataRoutingModule {}


