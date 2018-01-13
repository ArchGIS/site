/**
 * Created by nardm on 11.07.17.
 */

import {
    Component,
} from '@angular/core';
import {MdDialog, MdDialogConfig} from "@angular/material";
import {DialogInputComponent} from "../dialog-input/dialog-input.component";


@Component({
    selector: 'scientific-biography',
    templateUrl: 'scientific-biography.component.html',
    styleUrls: ['scientific-biography.component.scss']
})
export class ScientificBiographyComponent {

    constructor(public dialog: MdDialog) {

    }

    addDissert: boolean = false;

    onAdd(name: string) {
        let dialogRef = this.dialog.open(DialogInputComponent, <MdDialogConfig>{
            data: {name: name}
        });
    }


}

