/**
 * Created by nardm on 19.07.17.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TableDataComponent} from "../../components/#lib/table-data/table-data.component";


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
    ],
    entryComponents: [
    ],

    exports: [
        TableDataComponent
    ]
})
export class TableDataModule {}


