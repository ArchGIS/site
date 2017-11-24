

import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'admin-panel-form',
  templateUrl: `form.component.html`,
  styleUrls: ['form.component.scss'],
})

export class FormAdminPanelComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "ru"]);
    translate.setDefaultLang('ru');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'ru');
  }

  entities: string[] = ['Автор', "Исследование", 'Памятник', 'Артефакт', 'Радиоуглеродная датировка', 'Раскоп', 'ОКН', 'Эпоха', 'Культура', 'Отчёт', 'Публикация', 'Город', 'Организация'];
  filter: any;

  @Output() asd = new EventEmitter<boolean>();

  onSelect() {
    this.asd.emit();
  }

}
