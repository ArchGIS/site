

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

    ngOnChanges() {
        if (this.id) {
           // this.getArtifactID(this.id)
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

    /*getArtifactID(id: number) {
        let self = this;
        self.service.getArtifactID(id)
            .then(res => {
                let temp: Artifact = res.Artifact[0];
                temp.monument = [];
                temp.report = [];
                temp.spatia = [];
                temp.heritages = [];
                temp.artifacts = [];
                temp.cultures = [];
                temp.excavations.map(item=>{
                    item.artifacts.map(rr=>{
                        temp.artifacts.push(<Artifact>{
                            id: rr.id,
                            depth: rr.depth,
                            excRegion: rr.excRegion,
                            name: rr.name
                        })
                    })
                });
                temp.knowledges.map(rr => {
                    if (rr !== null && rr !== undefined) {
                        temp.monument.push(<Monument>{
                            id: rr.id,
                            name: rr.name,
                            knowledge: rr
                        });
                        if (rr.site.heritages) {
                            rr.site.heritages.map(hertigage => {
                                temp.heritages.push(<Heritage>{
                                    id: hertigage.id,
                                    name: hertigage.name
                                })
                            });
                        }
                        if (rr.culture) {
                            temp.cultures.push(<Culture>{
                                id: rr.culture.id,
                                ru_name: rr.culture.ru_name
                            })
                        }

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
