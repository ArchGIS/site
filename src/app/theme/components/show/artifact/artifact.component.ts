

import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import {Http} from "@angular/http";
import {SearchService} from "../../../services/search/search.service";
import {AuthorInter} from "../../#lib/table-data/table-data.component";
import Author = AuthorInter.Author;
import Monument = AuthorInter.Monument;
import Research2 = AuthorInter.Research2;
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AddItemShowIComponent} from "../ItemAdd/ItemAdd.component";
import {MdDialog} from "@angular/material";
import Spatial = AuthorInter.Spatial;
import Research = AuthorInter.Research;
import Heritage = AuthorInter.Heritage;
import Excavation = AuthorInter.Excavation;
import Artifact = AuthorInter.Artifact;
import Culture = AuthorInter.Culture;
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'show-artifact',
  templateUrl: 'artifact.component.html',
  styleUrls: ['artifact.component.scss'],
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

export class ArtifactShowIComponent implements OnChanges {

    constructor(private service: SearchService,
                public dialog: MdDialog) {
    }

    @Input() id: number;
    @Output() coordinats = new EventEmitter<Spatial[]>();
    artifact: Artifact = undefined;
    editName: boolean = false;
    editYear: boolean = false;
    editDescription: boolean = false;
    stateCtrl: FormControl;
    filteredStates: Observable<Monument[]>;
    researches: Culture[];
    add: boolean = false;
    nameAdd: string;



    ngOnChanges() {
        if (this.id) {
            this.getArtifactID(this.id)
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

    getArtifactID(id: number) {
        let self = this;
        self.service.getArtifactID(id)
            .then(res => {
                debugger;
                let temp: Artifact = res.Artifact[0];
                temp.spatia = [];
                temp.excavation.sites[0].spatial.map(coordinats => {
                            temp.spatia.push(
                                <Spatial>{
                                    id: 1,
                                    name: temp.name,
                                    x: coordinats.x,
                                    y: coordinats.y,
                                    type: coordinats.type,
                                    epoch: temp.excavation.sites[0].epoch
                                })
                });
                self.coordinats.emit(temp.spatia);
                self.artifact = temp;
                debugger;
            })
    }

}
