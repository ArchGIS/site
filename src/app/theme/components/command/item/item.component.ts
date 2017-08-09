

import {Component, Input, OnInit} from "@angular/core";
import {CommandItem} from "../command.component";

@Component({
  selector: `command-item`,
  templateUrl: `item.component.html`,
  styleUrls: ['item.component.scss'],
})

export class CommandItemComponent {

  constructor() {

  }

  @Input() item: CommandItem;
}

