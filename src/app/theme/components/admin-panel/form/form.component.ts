

import { Component, OnInit } from "@angular/core";
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

  entities: any;
  filter: any;

}
