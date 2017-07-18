
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommandComponent} from "./command.component";


const commandRoutes: Routes = [
  {
    path: '',
    component: CommandComponent,
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
        RouterModule.forChild(commandRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CommandRoutingModule {}


