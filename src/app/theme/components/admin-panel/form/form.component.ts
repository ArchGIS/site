

import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'admin-panel-form',
  templateUrl: `form.component.html`,
  styleUrls: ['form.component.scss'],
})

export class FormAdminPanelComponent {
  get entitiesIDSelect(): number {
    return this._entitiesIDSelect;
  }

  set entitiesIDSelect(value: number) {
    debugger;
    this.onSelectEntities(value);
    this._entitiesIDSelect = value;
  }
  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "ru"]);
    translate.setDefaultLang('ru');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'ru');
  }

  entities: { id: number, name: string }[] =
      [{id: 1, name: 'Автор'},
        {id: 2, name: "Исследование"},
        {id: 3, name: 'Памятник'},
        {id: 4, name: 'Артефакт'},
        {id: 5, name: 'Радиоуглеродная датировка'},
        {id: 6, name: 'Раскоп'},
        {id: 7, name: 'ОКН'},
        {id: 8, name: 'Эпоха'},
        {id: 9, name: 'Культура'},
        {id: 10, name: 'Отчёт'},
        {id: 11, name: 'Публикация'},
        {id: 12, name: 'Город'},
        {id: 13, name: 'Организация'}];
  filter: any;

  @Output() asd = new EventEmitter<boolean>();
  @Output() entitiesID = new EventEmitter<number>();

  public onSelect() {
    this.asd.emit();
  }


  private _entitiesIDSelect: number;

  onSelectEntities(id: number){
    this.entitiesID.emit(id);
  }

}
