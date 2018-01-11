

import {Component, Inject, OnInit} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {AuthorInter} from "../../#lib/table-data/table-data.component";
import Research2 = AuthorInter.Research2;
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'dialog-input',
  templateUrl: 'dialog-input.component.html',
  styleUrls: ['dialog-input.component.scss'],
})

export class DialogInputComponent {

  constructor(public dialogRef: MdDialogRef<DialogInputComponent>,
              @Inject(MD_DIALOG_DATA) public data: any) {
  }

  text: string;


}
