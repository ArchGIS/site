/**
 * Created by nardm on 11.07.17.
 */

import {
    Component,
} from '@angular/core';
import {MdDialog, MdDialogConfig} from "@angular/material";
import {DialogInputComponent} from "../dialog-input/dialog-input.component";
import {AddDissertationComponent} from "../add-dissertation/add-dissertation.component";


@Component({
    selector: 'my-maps',
    templateUrl: 'my-maps.component.html',
    styleUrls: ['my-maps.component.scss']
})
export class MyMapsComponent{

    constructor(public dialog: MdDialog) {

    }

    addDissert: boolean = false;

    onAdd(name: string) {
        let dialogRef = this.dialog.open(AddDissertationComponent, <MdDialogConfig>{
            data: {name: name}
        });
    }


}

