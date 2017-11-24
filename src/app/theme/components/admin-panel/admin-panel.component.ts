

import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: `admin-panel.component.html`,
  styleUrls: ['admin-panel.component.scss'],
})

export class AdminPanelIComponent {

  items: any;
  bool: boolean = true;

  onSelect(){
    this.bool = false;
  }
}
