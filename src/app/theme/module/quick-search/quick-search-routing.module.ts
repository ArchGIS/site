
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { QuickSearchComponent} from "./quick-search.component";


const QuickSearchRoutes: Routes = [
  {
    path: '',
    component: QuickSearchComponent,
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
        RouterModule.forChild(QuickSearchRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class QuickSearchRoutingModule {}


