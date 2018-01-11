
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommandComponent} from "./command.component";
import {CommandIComponent} from "../../components/command/command.component";


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
            {path: '', component: CommandIComponent}
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


