
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DataDownlandComponent} from "./data-download.component";


const DataDownlandRoutes: Routes = [
  {
    path: '',
    component: DataDownlandComponent,
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
        RouterModule.forChild(DataDownlandRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DataDownlandRoutingModule {}


