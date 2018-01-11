/**
 * Created by nardm on 14.11.17.
 */

import { Component, OnInit } from "@angular/core";
import {FormControl} from '@angular/forms';

@Component({
    selector: 'study-entry',
    template: `
        <div class="form">
            <h4>Сведения об исследовании</h4>
            <md-list style="    margin-top: -50px;">
                <md-list-item style=" display: flex; justify-content: center;">
                    <md-input-container style="width: 375px">
                        <input mdInput
                               type="text"
                               required
                               placeholder="Имя автора">
                        <md-hint>Введите автора исследования</md-hint>
                    </md-input-container>
                </md-list-item>
                <md-list-item style="display: flex; justify-content: center;">
                    <div class="button">
                        <button md-raised-button
                                color="primary">
                            <md-icon>settings</md-icon>
                            Добавить соавтора
                        </button>
                    </div>
                </md-list-item>
                <md-list-item style=" display: flex; justify-content: center;">
                    <md-input-container style="width: 375px">
                        <input mdInput
                               type="text"
                               required
                               placeholder="Год">
                        <md-hint>Год проведения исследования

                        </md-hint>
                    </md-input-container>
                </md-list-item>
                <md-list-item style=" display: flex; justify-content: center;">
                    <md-select [(value)]="selected" [formControl]="panelColor" style="width: 375px">
                        <md-option value="1">Нет данных</md-option>
                        <md-option value="2">Разведка</md-option>
                        <md-option value="4">Раскопки</md-option>
                    </md-select>
                </md-list-item>
                <md-list-item style=" display: flex; justify-content: center;">
                    <md-input-container style="width: 375px">
                        <input mdInput
                               type="text"
                               required
                               placeholder="Название отчёта">
                        <md-hint>Выберите отчёт

                        </md-hint>
                    </md-input-container>
                </md-list-item>

                <md-list-item style=" display: flex; justify-content: center;">
                    <md-checkbox [(ngModel)]="additionalInfo">Дополнительная информация об исследовании </md-checkbox>
                </md-list-item>

                <md-list-item *ngIf="additionalInfo" style=" display: flex; justify-content: center;">
                    <md-form-field style="width: 375px">
                        <textarea mdInput placeholder="Описание исследования"></textarea>
                    </md-form-field>
                </md-list-item>

            </md-list>
        </div>
    `,
    styles: [`.form{  
        min-height: 5vw;
    }
    md-list-item{
        margin-top: 40px; 
        display: flex;
        justify-content: center;
    }
        h4{
            text-align: center;
        }
    `],
})

export class StudyTemplateIComponent {

    panelColor = new FormControl('1');
    additionalInfo = false;
}



