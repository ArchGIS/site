
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import { SamplingRoutingModule} from "./sampling-routing.module";
import {TranslateService} from "ng2-translate";
import {SamplingComponent} from "./sampling.component";
import {SamplingIComponent} from "../../components/sampling/sampling.component";
import {TranslateModule} from "@ngx-translate/core";

const samplingComponent =[
  SamplingComponent,
  SamplingIComponent
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
    SamplingRoutingModule,
    TranslateModule.forRoot()
  ],
  declarations: [
    samplingComponent
  ],

  providers: [
    HTTP_CONST,
    TranslateService,
  ],
  entryComponents: [
  ],

  exports: []
})
export class SamplingModule {}


