
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DataEntryComponent} from "./data-entry.component";
import {DataEntryIComponent} from "../../components/data-entry/data-entry.component";

const dataEntryRoutes: Routes = [
  {
    path: '',
    component: DataEntryComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
            {path: '', component: DataEntryIComponent}
        ]
      }
    ]
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(dataEntryRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DataEntryRoutingModule {}


