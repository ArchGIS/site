
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
import {FormAdminPanelComponent} from "../../components/admin-panel/form/form.component";
import {TableDataModule} from "../table-data/table-data.module";

const adminPanelComponent =[
  AdminPanelComponent,
  AdminPanelIComponent,
  FormAdminPanelComponent
];


const HTTP_CONST = [
  TokenService,
  ConstService,
  MainService,
];


const MODULE_CUSTOM = [
  TableDataModule
];

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    AdminPanelRoutingModule,
    MODULE_CUSTOM
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


