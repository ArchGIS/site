
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import { UploadingDataRoutingModule} from "./uploading-data-routing.module";
import { UploadingDataComponent} from "./uploading-data.component";
import {UploadingDataIComponent} from "../../components/uploading-data/uploading-data.component";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

const uploadingDataComponent =[
  UploadingDataComponent,
  UploadingDataIComponent
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
    UploadingDataRoutingModule,
    TranslateModule.forRoot()
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


