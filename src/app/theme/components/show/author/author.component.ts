

import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {SearchService} from "../../../services/search/search.service";

@Component({
  selector: 'show-author',
  templateUrl: 'author.component.html',
  styleUrls: ['author.component.scss'],
})

export class AuthorShowIComponent implements OnChanges{

  constructor(private service: SearchService){}

  @Input() id: number;

  ngOnChanges(){
    if (this.id){
      this.getAuthorID(this.id)
    }
  }

  getAuthorID(id: number){
    this.service.getAuthorID(id)
        .then(res=>{
debugger;
        })
  }
}
