

import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: `admin-panel.component.html`,
  styleUrls: ['admin-panel.component.scss'],
})

export class AdminPanelIComponent {

  bool: boolean = true;


  entitiesID: number;

  onSelectEntities(id: number): void{
    this.entitiesID = id;
  }

  onSelect(){
    this.bool = false;
  }
}
