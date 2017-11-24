

import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: 'data-entry.component.html',
  styleUrls: ['data-entry.component.scss'],
})

export class DataEntryIComponent {


  bool: boolean = true;
  types = [
    {
      id: 1,
      name: 'Отчет'
    },
    {
      id: 2,
      name: 'Публикация'
    },
  ];


  essences = [
    {
      id: 1,
      name: 'Памятник',
    },
    {
      id: 2,
      name: 'Артефакт',
    },
    {
      id: 5,
      name: 'ОКН',
    },
    {
      id: 7,
      name: 'Радиоуглеродная датировка',
    },
    {
      id: 7,
      name: 'Исследование',
    },
  ]
}
