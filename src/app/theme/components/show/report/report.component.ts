

import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import {Http} from "@angular/http";
import {SearchService} from "../../../services/search/search.service";
import {AuthorInter} from "../../#lib/table-data/table-data.component";
import Author = AuthorInter.Author;
import Monument = AuthorInter.Monument;
import Research2 = AuthorInter.Research2;
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AddItemShowIComponent} from "../ItemAdd/ItemAdd.component";
import {MdDialog, MdDialogConfig} from "@angular/material";
import Spatial = AuthorInter.Spatial;
import Research = AuthorInter.Research;
import Heritage = AuthorInter.Heritage;
import Excavation = AuthorInter.Excavation;
import Artifact = AuthorInter.Artifact;
import Culture = AuthorInter.Culture;
import Report = AuthorInter.Report;

@Component({
  selector: 'show-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.scss'],
    animations: [
        trigger('flyInOut', [
            state('in', style({opacity: 1, transform: 'translateX(0)'})),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 0.1s ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})

export class ReportShowIComponent implements OnChanges {

    constructor(private service: SearchService,
                public dialog: MdDialog) {
    }

    @Input() id: number;
    @Output() coordinats = new EventEmitter<Spatial[]>();
    report: Report = undefined;
    editName: boolean = false;
    editYear: boolean = false;
    editDescription: boolean = false;

    ngOnChanges() {
        if (this.id) {
            this.getResearchID(this.id)
        }
    }

   /* onDeleteResearches(item: Research2) {
        this.author.researches = this.author.researches.filter(res => item.id !== res.id);
    }*/

    openDialog(name: string): void {
        let dialogRef = this.dialog.open(AddItemShowIComponent, <MdDialogConfig>{
            width: '500px',
            data: {text: name}
        });
    }

    getResearchID(id: number) {
        let self = this;
        self.service.getReportID(id)
            .then(res => {
                let temp: Report = res.Report[0];
                temp.spatia = [];
                temp.researches.map(item=>{
                    item.knowledges[0].site.spatial.map(coordinats => {
                        temp.spatia.push(
                            <Spatial>{
                                id: item.id,
                                name: item.name,
                                x: coordinats.x,
                                y: coordinats.y,
                                type: coordinats.type,
                                epoch: item.knowledges[0].site.epoch
                            })
                    })
                });

                self.coordinats.emit(temp.spatia);
                self.report = temp;
                debugger;
            })
    }

}
