

import {Component, Input, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {AuthorInter} from "../../../#lib/table-data/table-data.component";
import Research = AuthorInter.Research;
import Monument = AuthorInter.Monument;

@Component({
  selector: 'show-monument-item',
  templateUrl: 'item-monument.component.html',
  styleUrls: ['item-monument.component.scss'],
})

export class ItemMonumentShowIComponent {

  @Input() monument:Monument;
  editName: boolean = false;
  editYear: boolean = false;
  editDescription: boolean = false;
}
