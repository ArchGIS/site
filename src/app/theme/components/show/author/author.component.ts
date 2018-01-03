

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

@Component({
  selector: 'show-author',
  templateUrl: 'author.component.html',
  styleUrls: ['author.component.scss'],
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

export class AuthorShowIComponent implements OnChanges {

    constructor(private service: SearchService,
                public dialog: MdDialog) {
    }

    @Input() id: number;
    @Output() coordinats = new EventEmitter<Spatial[]>();
    author: Author;
    editName: boolean = false;

    ngOnChanges() {
        if (this.id) {
            this.getAuthorID(this.id)
        }
    }

    onDeleteResearches(item: Research2) {
        this.author.researches = this.author.researches.filter(res => item.id !== res.id);
    }

    openDialog(name: string): void {
        let dialogRef = this.dialog.open(AddItemShowIComponent, <MdDialogConfig>{
            width: '500px',
            data: {text: name}
        });
    }

    getAuthorID(id: number) {
        let self = this;
        self.service.getAuthorID(id)
            .then(res => {
                debugger;
                let temp: Author = res.Author[0];
                temp.monument = [];
                temp.report = [];
                temp.publications = [];
                temp.spatia = [];
                temp.researches.map(item => {
                    item.knowledges.map(rr => {
                        if (rr !== null && rr !== undefined) {
                            if (rr.site!==undefined && rr.site !==null)  {
                                if (rr.site.spatial !== undefined && rr.site.spatial !== null) {
                                    if (rr.site.spatial[0]!==null && rr.site.spatial[0]!== undefined)
                                    {
                                        temp.monument.push(<Monument>{id: rr.id, name: rr.name});
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

                                }
                            }
                        }
                    });
                    if (item.report) {
                        temp.report.push(item.report);
                    }
                    if (item.publication) {
                        temp.publications.push(item.publication);
                    }

                });
                self.coordinats.emit(temp.spatia);
                self.author = temp;
                debugger;
            })
    }

}
