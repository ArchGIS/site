

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
import Publication = AuthorInter.Publication;

@Component({
  selector: 'show-publication',
  templateUrl: 'publication.component.html',
  styleUrls: ['publication.component.scss'],
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

export class PublicationShowIComponent implements OnChanges {

    constructor(private service: SearchService,
                public dialog: MdDialog) {
    }

    @Input() id: number;
    @Output() coordinats = new EventEmitter<Spatial[]>();
    publication: Publication = undefined;
    editName: boolean = false;
    editYear: boolean = false;
    editDescription: boolean = false;

    ngOnChanges() {
        if (this.id) {
            this.getPublicationID(this.id)
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

    getPublicationID(id: number) {
        let self = this;
        self.service.getPublicationID(id)
            .then(res => {
                let temp: Publication = res.Publication[0];
                temp.spatia = [];
                self.coordinats.emit(temp.spatia);
                self.publication = temp;
                debugger;
            })
    }

}
