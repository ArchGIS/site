
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import {CommandRoutingModule} from "./command-routing.module";
import {TranslateService} from "ng2-translate";
import {CommandIComponent} from "../../components/command/command.component";
import {CommandComponent} from "./command.component";
import {TranslateModule} from "@ngx-translate/core";
import {CommandItemComponent} from "../../components/command/item/item.component";

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
    commandComponent,
    CommandItemComponent
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


