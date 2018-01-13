
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
import {AddDissertationComponent} from "../../components/personal-area/add-dissertation/add-dissertation.component";
import {PlacesWorkComponent} from "../../components/personal-area/places-work/places-work.component";
import {PersonalMonumentComponent} from "../../components/personal-area/monument/monument.component";
import {MyResearchComponent} from "../../components/personal-area/my-research/my-research.component";
import {MyReportComponent} from "../../components/personal-area/my-report/my-report.component";
import {MyPublishComponent} from "../../components/personal-area/my-publish/my-publish.component";
import {MySamplesComponent} from "../../components/personal-area/my-samples/my-samples.component";
import {MyColleaguesComponent} from "../../components/personal-area/my-colleagues/my-colleagues.component";
import {MyCurrentResearchComponent} from "../../components/personal-area/my-current-research/my-current-research.component";
import {MyMapsComponent} from "../../components/personal-area/my-maps/my-maps.component";
import {MyToolsComponent} from "../../components/personal-area/my-tools/my-tools.component";
import {MyMessagesComponent} from "../../components/personal-area/my-messages/my-messages.component";

const mainComponent =[
  TopBarComponent,
  AboutComponent,
  MainComponent,
  MainCountComponent,
  PersonalAreaComponent,
  PersonalInformationComponent,
  DialogInputComponent,
  ScientificBiographyComponent,
    AddDissertationComponent,
    PlacesWorkComponent,
    PersonalMonumentComponent,
    MyResearchComponent,
    MyReportComponent,
    MyPublishComponent,
    MySamplesComponent,
    MyColleaguesComponent,
    MyCurrentResearchComponent,
    MyMapsComponent,
    MyToolsComponent,
    MyMessagesComponent
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


