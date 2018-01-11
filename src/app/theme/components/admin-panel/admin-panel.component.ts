

import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: `admin-panel.component.html`,
  styleUrls: ['admin-panel.component.scss'],
})

export class AdminPanelIComponent {

  bool: boolean = true;


  entitiesID: number;
  textSearch: string;

  onBack(){
    this.bool = true;
  }


  onSelectEntities(id: number): void{
    this.entitiesID = id;
  }

  onSelectEntitiesLike(like: string): void{
    this.textSearch = like;
  }

  onSelect(){
    this.bool = false;
  }
}
