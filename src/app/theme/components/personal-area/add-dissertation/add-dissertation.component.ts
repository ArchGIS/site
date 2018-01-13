

import {Component, Inject, OnInit} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {AuthorInter} from "../../#lib/table-data/table-data.component";
import Research2 = AuthorInter.Research2;
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'add-dissertation',
  templateUrl: 'add-dissertation.component.html',
  styleUrls: ['add-dissertation.component.scss'],
})

export class AddDissertationComponent {

  constructor(public dialogRef: MdDialogRef<AddDissertationComponent>,
              @Inject(MD_DIALOG_DATA) public data: any) {
  }

  add: boolean = false;

}
