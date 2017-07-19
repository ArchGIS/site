
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import { UploadingDataRoutingModule} from "./uploading-data-routing.module";
import {TranslateService} from "ng2-translate";
import { UploadingDataComponent} from "./uploading-data.component";
import {UploadingDataIComponent} from "../../components/uploading-data/uploading-data.component";
import {FormUploadPanelComponent} from "../../components/uploading-data/form/form.component";
import {TableDataModule} from "../table-data/table-data.module";

const uploadingDataComponent =[
  UploadingDataComponent,
  UploadingDataIComponent,
  FormUploadPanelComponent
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
    UploadingDataRoutingModule,
    MODULE_CUSTOM
  ],
  declarations: [
    uploadingDataComponent
  ],

  providers: [
    HTTP_CONST,
    TranslateService,
  ],
  entryComponents: [
  ],

  exports: []
})
export class UploadingDataModule {}


