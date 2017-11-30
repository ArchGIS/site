

import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {SearchService} from "../../../services/search/search.service";
import {AuthorInter} from "../../#lib/table-data/table-data.component";
import Author = AuthorInter.Author;
import Monument = AuthorInter.Monument;
import Research2 = AuthorInter.Research2;
import {animate, state, style, transition, trigger} from "@angular/animations";

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

  constructor(private service: SearchService) {
  }

  @Input() id: number;
  author: Author;
  editName: boolean = false;

  ngOnChanges() {
    if (this.id) {
      this.getAuthorID(this.id)
    }
  }

    onDeleteResearches(item: Research2){
        this.author.researches = this.author.researches.filter(res=> item.id!==res.id);
    }

  getAuthorID(id: number) {
    let self = this;
    self.service.getAuthorID(id)
        .then(res => {
          let temp = res.Author[0];
          temp.monument = [];
          temp.researches.map(item=>{
            item.knowledges.map(rr=>{
              if (rr!==null&&rr!==undefined){
                temp.monument.push(<Monument>{id: rr.id, name: rr.name})
              }
            })
          });
          self.author = temp;
          debugger;
        })
  }
}
