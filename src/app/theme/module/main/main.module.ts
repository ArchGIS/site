
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
import {MainRoutingModule} from "./main-routing.module";
import {MainComponent} from "./main.component";
import {MainCountComponent} from "../../components/main/main.component";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {PersonalAreaComponent} from "../../components/personal-area/personal-area.component";
import {PersonalInformationComponent} from "../../components/personal-area/personal-information/personal-information.component";
import {ImageUploadModule} from "../../components/#lib/ng2-image-upload-master/src/image-upload.module";
import {DialogInputComponent} from "../../components/personal-area/dialog-input/dialog-input.component";
import {ScientificBiographyComponent} from "../../components/personal-area/scientific-biography/scientific-biography.component";

const mainComponent =[
  TopBarComponent,
  AboutComponent,
  MainComponent,
  MainCountComponent,
  PersonalAreaComponent,
  PersonalInformationComponent,
  DialogInputComponent,
  ScientificBiographyComponent
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
    MainRoutingModule,
    TranslateModule.forRoot(),
    ImageUploadModule.forRoot()

  ],
  declarations: [
    mainComponent
  ],

  providers: [
    HTTP_CONST,
    TranslateService,
  ],
  entryComponents: [
  ],

  exports: []
})
export class MainModule {}


