
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdvancedSearchComponent} from "./advanced-search.component";


const AdvancedSearchRoutes: Routes = [
  {
    path: '',
    component: AdvancedSearchComponent,
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
        RouterModule.forChild(AdvancedSearchRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdvancedSearchRoutingModule {}


