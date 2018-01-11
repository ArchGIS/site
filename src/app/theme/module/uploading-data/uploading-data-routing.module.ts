
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { UploadingDataComponent} from "./uploading-data.component";
import {UploadingDataIComponent} from "../../components/uploading-data/uploading-data.component";


const uploadingDataRoutes: Routes = [
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
        RouterModule.forChild(uploadingDataRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UploadingDataRoutingModule {}


