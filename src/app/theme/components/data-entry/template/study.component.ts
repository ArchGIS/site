/**
 * Created by nardm on 14.11.17.
 */


import { Component, OnInit } from "@angular/core";

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
                        <md-hint>Введите существующего автора исследования</md-hint>
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
                               placeholder="Название отчёта">
                        <md-hint>Выберите существующий отчёт

                        </md-hint>
                    </md-input-container>
                </md-list-item>
            </md-list>
        </div>
    `,
    styles: [`.form{  
        min-height: 25vw;
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


}



