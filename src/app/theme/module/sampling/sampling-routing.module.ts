
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { SamplingComponent} from "./sampling.component";

const SamplingRoutes: Routes = [
  {
    path: '',
    component: SamplingComponent,
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
        RouterModule.forChild(SamplingRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SamplingRoutingModule {}


