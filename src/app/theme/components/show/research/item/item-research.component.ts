

import {Component, Input, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {AuthorInter} from "../../../#lib/table-data/table-data.component";
import Research = AuthorInter.Research;
import Monument = AuthorInter.Monument;
import Knowledge = AuthorInter.Knowledge;

@Component({
  selector: 'show-research-item',
  templateUrl: 'item-research.component.html',
  styleUrls: ['item-research.component.scss'],
})

export class ItemResearchShowIComponent {

  @Input() research:Knowledge;
  editName: boolean = false;
  editYear: boolean = false;
  editDescription: boolean = false;
}
