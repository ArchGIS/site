
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DataDownlandComponent} from "./data-download.component";
import {DataDownloadIComponent} from "../../components/data-download/data-download.component";


const dataDownlandRoutes: Routes = [
  {
    path: '',
    component: DataDownlandComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
            {path: '', component: DataDownloadIComponent}
        ]
      }
    ]
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(dataDownlandRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DataDownlandRoutingModule {}


