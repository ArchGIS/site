
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { UploadingDataComponent} from "./uploading-data.component";
import {UploadingDataIComponent} from "../../components/uploading-data/uploading-data.component";


const UploadingDataRoutes: Routes = [
  {
    path: '',
    component: UploadingDataComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
            {path: '', component: UploadingDataIComponent}
        ]
      }
    ]
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(UploadingDataRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UploadingDataRoutingModule {}


