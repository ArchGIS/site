

import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import {Http} from "@angular/http";
import {SearchService} from "../../../services/search/search.service";
import {MdDialog} from "@angular/material";
import {AuthorInter} from "../../#lib/table-data/table-data.component";
import Spatial = AuthorInter.Spatial;
import Monument = AuthorInter.Monument;
import {AddItemShowIComponent} from "../ItemAdd/ItemAdd.component";

@Component({
  selector: 'show-monument',
  templateUrl: 'monument.component.html',
  styleUrls: ['monument.component.scss'],
})

export class MonumentShowIComponent implements OnChanges {
  constructor(private service: SearchService,
              public dialog: MdDialog) {
  }

  @Input() id: number;
  @Output() coordinats = new EventEmitter<Spatial[]>();
  monument: Monument = undefined;
  editName: boolean = false;
  editYear: boolean = false;
  editDescription: boolean = false;

  ngOnChanges() {
    if (this.id) {
      //this.getResearchID(this.id)
    }
  }

  /* onDeleteResearches(item: Research2) {
   this.author.researches = this.author.researches.filter(res => item.id !== res.id);
   }*/

  openDialog(name: string): void {
    let dialogRef = this.dialog.open(AddItemShowIComponent, {
      width: '500px',
      data: {text: name}
    });
  }

  /*getMonumentID(id: number) {
    let self = this;
    self.service.getMonumentID(id)
        .then(res => {
          debugger;
          let temp: Monument = res.Monument[0];
          temp.monument = [];
          temp.report = [];
          temp.spatia = [];
          temp.knowledges.map(rr => {
            if (rr !== null && rr !== undefined) {
              temp.monument.push(<Monument>{
                id: rr.id,
                name: rr.name,
                knowledge: rr
              });
              rr.site.spatial.map(coordinats => {
                temp.spatia.push(
                    <Spatial>{
                      id: rr.id,
                      name: rr.name,
                      x: coordinats.x,
                      y: coordinats.y,
                      type: coordinats.type,
                      epoch: rr.site.epoch
                    })
              })
            }
          });
          self.coordinats.emit(temp.spatia);
          self.research = temp;
          debugger;
        })
  }*/

}
