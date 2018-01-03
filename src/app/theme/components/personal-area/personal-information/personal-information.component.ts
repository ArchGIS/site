/**
 * Created by nardm on 11.07.17.
 */

import {
    Component,
} from '@angular/core';
import {MdDialog, MdDialogConfig} from "@angular/material";
import {DialogInputComponent} from "../dialog-input/dialog-input.component";


@Component({
    selector: 'personal-information',
    templateUrl: 'personal-information.component.html',
    styleUrls: ['personal-information.component.scss']
})
export class PersonalInformationComponent {

    constructor(public dialog: MdDialog) {

    }

    onAdd(name: string) {
        let dialogRef = this.dialog.open(DialogInputComponent, <MdDialogConfig>{
            data: {name: name}
        });
    }


}

