
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import {CommandRoutingModule} from "./command-routing.module";
import {CommandIComponent} from "../../components/command/command.component";
import {CommandComponent} from "./command.component";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

const commandComponent =[
  CommandComponent,
  CommandIComponent
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
    CommandRoutingModule,
    TranslateModule.forRoot()
  ],
  declarations: [
    commandComponent
  ],

  providers: [
    HTTP_CONST,
    TranslateService,
  ],
  entryComponents: [
  ],

  exports: []
})
export class CommandModule {}


