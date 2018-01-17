import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Parameter} from "../advanced-search.component";

@Component({
  selector: 'search-query-form',
  templateUrl: `query.component.html`,
  styleUrls: ['query.component.scss'],
})

export class FormSearchQueryComponent {

  constructor() {
    let self = this;
  }

  params: Parameter[] = [];
  critCount: string[] = ['1'];

  onAddCriteria() {
    this.critCount.push('1');
  }

  onDeleteCriteria() {
    this.critCount.splice(0, 1);
    this.params.splice(0, 1);
  }

  updateParameters(data) {
    this.params[data[0]] = {name: data[2], value: data[1], not: data[3]};
    this.onChange.emit([this.count-1, this.params]);
  }

  @Input() count: number;

  @Output() onChange:EventEmitter<any[]> = new EventEmitter();
  @Output() onDelete:EventEmitter<any[]> = new EventEmitter();
}

