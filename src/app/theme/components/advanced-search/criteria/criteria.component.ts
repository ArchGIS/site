import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'search-criteria-form',
  templateUrl: `criteria.component.html`,
  styleUrls: ['criteria.component.scss'],
})

export class FormSearchCriteriaComponent {

  constructor() {
    let self = this;
    self.criteria = [
      {id: 0, name: 'authName', desc: 'Автор: имя', },
      {id: 1, name: 'authJob', desc: 'Автор: место работы',},

      {id: 2, name: 'artCat', desc: 'Артефакт: категория',},
      {id: 3, name: 'artCul', desc: 'Артефакт: культура',},
      {id: 4, name: 'artMat', desc: 'Артефакт: материал',},
      {id: 5, name: 'artName', desc: 'Артефакт: название',},
      {id: 6, name: 'artPhotoBefore', desc: 'Артефакт: изображения, сделанные ранее…',},
      {id: 7, name: 'artPhotoAfter', desc: 'Артефакт: изображения, сделанные позднее…',},
      {id: 8, name: 'artYearBefore', desc: 'Артефакт: найден до…',},
      {id: 9, name: 'artYearAfter', desc: 'Артефакт: найден после…',},

      {id: 10, name: 'excAreaMore', desc: 'Вскрытия: общая площадь более…',},
      {id: 11, name: 'excAreaLess', desc: 'Вскрытия: общая площадь менее…',},
      {id: 12, name: 'excObjName', desc: 'Вскрытия: название объекта',},
      {id: 13, name: 'excBossName', desc: 'Вскрытия: руководитель работ',},

      {id: 14, name: 'resAfter', desc:'Исследования: проведено позднее…',},
      {id: 15, name: 'resBefore', desc:'Исследования: проведено ранее…',},
      {id: 16, name: 'resType', desc:'Исследования: тип',},

      {id: 17, name: 'colStorage', desc:'Коллекция: место хранения',},
      {id: 18, name: 'colName', desc:'Коллекция: название',},

      {id: 19, name: 'herSec', desc:'ОКН: категория охраны',},
      {id: 20, name: 'herReg', desc:'ОКН: местоположение – регион РФ',},
      {id: 21, name: 'herAfter', desc:'ОКН: поставлен на охрану позднее…',},
      {id: 22, name: 'herBefore', desc:'ОКН: поставлен на охрану ранее…',},

      {id: 23, name: 'siteCul', desc:'Памятник: культура',},
      {id: 24, name: 'siteName', desc:'Памятник: название',},
      {id: 25, name: 'siteType', desc:'Памятник: тип',},
      {id: 26, name: 'siteEpoch', desc:'Памятник: эпоха',},
      {id: 27, name: 'siteTopoAfter', desc:'Памятник: топопланы, снятые позднее…',},
      {id: 28, name: 'siteTopoBefore', desc:'Памятник: топопланы, снятые ранее…',},
      {id: 29, name: 'sitePhotoAfter', desc:'Памятник: фотографии, снятые позднее…',},
      {id: 30, name: 'sitePhotoBefore', desc:'Памятник: фотографии, снятые ранее…',},

      {id: 31, name: 'pubName', desc:'Публикация: название издания',},
      {id: 32, name: 'pubPlace', desc:'Публикация: место издания',},
      {id: 33, name: 'pubTitle', desc:'Публикация: название публикации',},
    ];

    self.epochs = [
      {id: "1", name: 'Новое время'},
      {id: "2", name: 'Средневековье'},
      {id: "3", name: 'Эпоха Великого переселения'},
      {id: "4", name: 'Ранний железный век'},
      {id: "5", name: 'Эпоха палеометалла'},
      {id: "6", name: 'Неолит'},
      {id: "7", name: 'Палеолит/Мезолит'},
    ];

    self.herSec = [
      {id: "1", name: 'Федеральная'},
      {id: "2", name: 'Региональная'},
    ];

    self.resTypes = [
      {id: "2", name: 'Разведка'},
      {id: "3", name: 'Аналитическое'},
      {id: "4", name: 'Раскопки'},
    ];

    self.siteTypes = [
      {id: "1", name: 'Укрепленное поселение (городище)'},
      {id: "2", name: 'Неукрепленное поселение (стоянка/селище)'},
      {id: "3", name: 'Местонахождение'},
      {id: "4", name: 'Грунтовый могильник'},
      {id: "5", name: 'Курганный могильник'},
      {id: "6", name: 'Производственный'},
      {id: "7", name: 'Святилище (жертвенное место)'},
      {id: "8", name: 'Клад'},
      {id: "9", name: 'Комплексный'},
      {id: "10", name: 'Памятник архитектуры'},
      {id: "12", name: 'Надгробие'},
    ];
  }

  public criteria: Criteria[];
  public criteriaID: number = 0;
  public epochs: selectorOption[];
  public herSec: selectorOption[];
  public resTypes: selectorOption[];
  public siteTypes: selectorOption[];

  @Input() count: number;
  value: string;

  @Output() onChange:EventEmitter<any[]> = new EventEmitter();
  change(value) {
    this.onChange.emit([this.count-1, value, this.criteria[this.criteriaID].name]);
  }
}
export interface selectorOption{
  id: number;
  name: string;
}

export interface Criteria{
  id: string;
  name: string;
  desc: string;
}