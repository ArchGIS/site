import {Component, OnChanges, OnInit, Query} from "@angular/core";
import {createQuery} from "@angular/core/src/view/query";
import {SearchService} from "../../services/search/search.service";

@Component({
  templateUrl: `advanced-search.component.html`,
  styleUrls: ['advanced-search.component.scss'],
})

export class AdvancedSearchIComponent implements OnChanges{

  constructor(private service: SearchService) {
    let self = this;
    self.typeS = [
      {id: 1, name: 'Памятник', value: 'monument'},
      {id: 2, name: 'Иследование', value: 'research'},
      {id: 3, name: 'Автор', value: 'author'},
    ];
  }

  public typeS: EntityType[] = [];
  public typeSID: number = 1;

  query: SearchQuery[] = [];
  values: Parameter[] = [];
  findData: any[];

  entity: string = 'monument';
  queryCount: string[] = ['1'];

  onAddQuery() {
    this.queryCount.push('1');
  }

  onDeleteQuery() {
    this.queryCount.splice(0, 1);
    this.query.splice(this.query.length - 1, 1);
  }

  updateEntity() {
    let self = this;
    this.findData = [];
    this.entity = this.typeS[this.typeSID-1].value;

    this.query.forEach(function (query) {
      query.id = self.typeSID;
    })
  }

  updateValues(data) {
    this.query[data[0]] = {id: this.typeSID, params: data[1]};
  }

  sendQuery() {
    let self = this;
    self.service.getAdvancedSearch(JSON.stringify(this.query))
      .then(res => {
        self.findData = res;
        console.log(self.findData)
      })
  }

  ngOnChanges(){
    debugger;
  }
}

export interface EntityType{
  id: number;
  name: string;
  value: string;
}

export interface Parameter {
  name: string;
  value: string;
  not: boolean;
}

export interface SearchQuery {
  id: number;
  params: Parameter[];
}
