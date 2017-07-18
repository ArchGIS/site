
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DataEntryComponent} from "./data-entry.component";

const DataEntryRoutes: Routes = [
  {
    path: '',
    component: DataEntryComponent,
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
        RouterModule.forChild(DataEntryRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DataEntryRoutingModule {}


