
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import {AdminPanelRoutingModule} from "./admin-panel-routing.module";
import {TranslateService} from "ng2-translate";
import {AdminPanelIComponent} from "../../components/admin-panel/admin-panel.component";
import {AdminPanelComponent} from "./admin-panel.component";

const adminPanelComponent =[
  AdminPanelComponent,
  AdminPanelIComponent
];


const HTTP_CONST = [
  TokenService,
  ConstService,
  MainService,
];


@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    AdminPanelRoutingModule
  ],
  declarations: [
    adminPanelComponent
  ],

  providers: [
    HTTP_CONST,
    TranslateService,
  ],
  entryComponents: [
  ],

  exports: []
})
export class AdminPanelModule {}


