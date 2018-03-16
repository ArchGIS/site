

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
import Radiocarbon = AuthorInter.Radiocarbon;
import {Consts} from "../../../../const/app-const";

@Component({
  selector: 'show-radiocarbon',
  templateUrl: 'radiocarbon.component.html',
  styleUrls: ['radiocarbon.component.scss'],
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

export class RadiocarbonComponent implements OnChanges {

    constructor(private service: SearchService,
                public dialog: MdDialog) {
    }

    @Input() id: number;
    @Output() coordinats = new EventEmitter<Spatial[]>();
    radiocarbon: Radiocarbon = undefined;
    editName: boolean = false;
    editYear: boolean = false;
    editDescription: boolean = false;

    ngOnChanges() {
        if (this.id) {
            this.getRadiocarbonID(this.id)
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

    getRadiocarbonID(id: number) {
        let self = this;
        self.service.getRadiocarbonID(id)
            .then(res => {
                debugger;
                let temp: Radiocarbon = res.Radiocarbon[0];
                debugger;
                temp.spatia = [];
                self.coordinats.emit(temp.spatia);
                self.radiocarbon = temp;
                debugger;
            })
    }

    uploadUrl: string = Consts.baseURL + 'v1/service/request/photo';
    AddImage(ind: number) {
    }

    imageRemoved(event, ind) {
        let id = JSON.parse(event.serverResponse).data.id;
    }

    imageUploaded(event, ind) {
        let id = JSON.parse(event.serverResponse).data.id;
    }

}
