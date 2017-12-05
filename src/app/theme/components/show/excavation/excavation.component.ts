

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
  selector: 'show-excavation',
  templateUrl: 'excavation.component.html',
  styleUrls: ['excavation.component.scss'],
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

export class ExcavationShowIComponent implements OnChanges {

    constructor(private service: SearchService,
                public dialog: MdDialog) {
    }

    @Input() id: number;
    @Output() coordinats = new EventEmitter<Spatial[]>();
    excavation: Excavation= undefined;
    editName: boolean = false;
    editYear: boolean = false;
    editDescription: boolean = false;

    ngOnChanges() {
        if (this.id) {
            this.getExcavationID(this.id)
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

    getExcavationID(id: number) {
        let self = this;
        self.service.getExcavationID(id)
            .then(res => {
                debugger;
                let temp: Excavation = res.Excavation[0];
                temp.monument = [];
                temp.report = [];
                temp.spatia = [];
                temp.artifacts = [];
                temp.radiocarbons = [];
                if (temp.researches!==undefined &&
                    temp.researches!== null){
                    if (temp.researches.length!==0){
                        if (temp.researches[0].artifacts!==null&&
                            temp.researches[0].artifacts!==undefined){
                            if (temp.researches[0].artifacts.length!==0){
                                temp.artifacts = temp.researches[0].artifacts;
                            }
                        }
                        if (temp.researches[0].radiocarbons!==null&&
                            temp.researches[0].radiocarbons!==undefined){
                            if (temp.researches[0].radiocarbons.length!==0){
                                temp.radiocarbons = temp.researches[0].radiocarbons;
                            }
                        }

                        temp.researches[0].knowledges.map(rr => {
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

                    }

                }

                self.excavation = temp;
                self.coordinats.emit(temp.spatia);
                debugger;
            })
    }

}
