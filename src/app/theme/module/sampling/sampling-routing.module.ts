
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { SamplingComponent} from "./sampling.component";
import {SamplingIComponent} from "../../components/sampling/sampling.component";

const samplingRoutes: Routes = [
  {
    path: '',
    component: SamplingComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
            {path: '', component: SamplingIComponent}
        ]
      }
    ]
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(samplingRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SamplingRoutingModule {}


