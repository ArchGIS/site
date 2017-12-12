

import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import {Http} from "@angular/http";
import {SearchService} from "../../../services/search/search.service";
import {MdDialog} from "@angular/material";
import {AuthorInter} from "../../#lib/table-data/table-data.component";
import Spatial = AuthorInter.Spatial;
import Monument = AuthorInter.Monument;
import {AddItemShowIComponent} from "../ItemAdd/ItemAdd.component";
import {FormControl} from "@angular/forms";
import Research2 = AuthorInter.Research2;
import {Observable} from "rxjs/Observable";
import Culture = AuthorInter.Culture;

@Component({
  selector: 'show-monument',
  templateUrl: 'monument.component.html',
  styleUrls: ['monument.component.scss'],
})

export class MonumentShowIComponent implements OnChanges {
  constructor(private service: SearchService,
              public dialog: MdDialog) {
      this.onAddResearches();
      this.stateCtrl = new FormControl();
  }

    stateCtrl: FormControl;
    filteredStates: Observable<Culture[]>;
    researches: Culture[];
    add: boolean = false;
    nameAdd: string;

    onAdd(event, city: any) {
        this.nameAdd = city.ru_name;
        this.monument.knowledge.culture.ru_name = city.ru_name;
        this.add = true;
        this.editCulture = false;
        debugger;
    }

    onAddResearches() {
        let self = this;
        self.service.getCulture()
            .then(res => {
                debugger;
                let temp: Culture[] = [];
                res.Culture.map(item=>{
                        if (item!==undefined&& item!==null){
                        temp.push(item);
                    }
                })
                self.researches = temp;
                self.filteredStates = self.stateCtrl.valueChanges
                    .startWith(null)
                    .map(user => user && typeof user === 'object' ? user.ru_name : user)
                    .map(name => name ? self.filterStates(name) : self.researches.slice());
                debugger;
            })
    }

    public displayFn(item: any) {
        let self = this;
        return item ? item.ru_name : item;
    }

    filterStates(name: string) {
        return this.researches.filter(option => new RegExp(`^${name}`, 'gi')
            .test(option.ru_name));
    }


  @Input() id: number;
  @Output() coordinats = new EventEmitter<Spatial[]>();
  monument: Monument = undefined;
  editName: boolean = false;
  editYear: boolean = false;
  editDescription: boolean = false;
  editCulture: boolean = false;





  ngOnChanges() {
    if (this.id) {
      this.getMonumentID(this.id)
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

  getMonumentID(id: number) {
    let self = this;
    self.service.getMonumentID(id)
        .then(res => {
          debugger;
          let temp: Monument = res.Site[0];
          temp.monument = [];
          temp.report = [];
          temp.spatia = [];
          temp.knowledge = temp.knowledges[0];
          temp.knowledge_count = res.Site[0].knowledges.lenght;
          temp.spatial.map(coordinats => {
            temp.spatia.push(
                <Spatial>{
                  id: res.id,
                  name: res.name,
                  x: coordinats.x,
                  y: coordinats.y,
                  type: coordinats.type,
                  epoch: temp.epoch
                })
          });

          self.coordinats.emit(temp.spatia);
          debugger;
          self.monument = temp;
        })
  }

}
