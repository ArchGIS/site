/**
 * Created by nardm on 19.07.17.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TableDataComponent} from "../../components/#lib/table-data/table-data.component";
import {SearchService} from "../../services/search/search.service";
import {MainService} from "../../services/main/main.service";
import {ConstService} from "../../services/http/service-const.service";
import {TokenService} from "../../services/token/token.serviece";


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
    ],
    declarations: [
        TableDataComponent
    ],

    providers: [
        HTTP_CONST,
        SearchService
    ],
    entryComponents: [
    ],

    exports: [
        TableDataComponent
    ]
})
export class TableDataModule {}


