

import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'admin-panel-form',
  templateUrl: `form.component.html`,
  styleUrls: ['form.component.scss'],
})

export class FormAdminPanelComponent {
    set textS(value: string) {
        this.textSearch.emit(value);
        this._textS = value;
    }
    get entitiesIDSelect(): number {
        return this._entitiesIDSelect;
    }

    set entitiesIDSelect(value: number) {
        debugger;
        this.onSelectEntities(value);
        this._entitiesIDSelect = value;
    }

    constructor(private translate: TranslateService) {
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
            /*{id: 10, name: 'Отчёт'},
            {id: 11, name: 'Публикация'},
            {id: 12, name: 'Город'},
            {id: 13, name: 'Организация'}
            */];
    filter: any;

    @Output() textSearch = new EventEmitter<string>();
    @Output() entitiesID = new EventEmitter<number>();
    @Output() next = new EventEmitter<boolean>();
    private _textS: string = "";

    public onSelect() {
        this.next.emit();
    }


    private _entitiesIDSelect: number;

    onSelectEntities(id: number) {
        this.entitiesID.emit(id);
    }

}
