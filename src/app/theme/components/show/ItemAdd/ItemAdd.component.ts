

import {Component, Inject, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {SearchService} from "../../../services/search/search.service";
import {AuthorInter} from "../../#lib/table-data/table-data.component";
import Research2 = AuthorInter.Research2;
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'show-add-item',
  templateUrl: 'ItemAdd.component.html',
  styleUrls: ['ItemAdd.component.scss'],
})

export class AddItemShowIComponent {

  constructor(public dialogRef: MdDialogRef<AddItemShowIComponent>,
              private service: SearchService,
              @Inject(MD_DIALOG_DATA) public data: any) {
    this.onAddResearches();
    this.stateCtrl = new FormControl();


  }

  public displayFn(item: any) {
    let self = this;
    return item ? item.name : item;
  }

  filterStates(name: string) {
    return this.researches.filter(option => new RegExp(`^${name}`, 'gi')
        .test(option.name));
  }

  stateCtrl: FormControl;
  filteredStates: Observable<Research2[]>;
  researches: Research2[];
  add: boolean = false;
  nameAdd: string;

  onAdd(event, city: any) {
    this.nameAdd = city.name;
    this.add = true;
    debugger;
  }

  onAddResearches() {
    let self = this;
    self.service.getResearches()
        .then(res => {
          self.researches = res.Research;
          self.filteredStates = self.stateCtrl.valueChanges
              .startWith(null)
              .map(user => user && typeof user === 'object' ? user.name : user)
              .map(name => name ? self.filterStates(name) : self.researches.slice());
          debugger;
        })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
