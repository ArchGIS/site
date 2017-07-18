
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdvancedSearchComponent} from "./advanced-search.component";
import {AdvancedSearchIComponent} from "../../components/advanced-search/advanced-search.component";


const advancedSearchRoutes: Routes = [
  {
    path: '',
    component: AdvancedSearchComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
            {path: '', component: AdvancedSearchIComponent}
        ]
      }
    ]
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(advancedSearchRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdvancedSearchRoutingModule {}


