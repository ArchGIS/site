
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import {AboutComponent} from "../../components/about/about.component";
import {TopBarComponent} from "../../../pages/top-bar/top-bar.component";
import {NoContentComponent} from "../../../no-content/no-content.component";
import {MainRoutingModule} from "./main-routing.module";
import {TranslateService} from "ng2-translate";
import {MainComponent} from "./main.component";

const mainComponent =[
  TopBarComponent,
  AboutComponent,
  NoContentComponent,
  MainComponent
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
    MainRoutingModule
  ],
  declarations: [
    mainComponent
  ],

  providers: [
    HTTP_CONST,
    TranslateService
  ],
  entryComponents: [
  ],

  exports: []
})
export class MainModule {}


