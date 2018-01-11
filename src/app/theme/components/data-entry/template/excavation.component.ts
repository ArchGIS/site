/**
 * Created by Magis on 12.12.2017.
 */

import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'excavation-entry',
  template: `
      <div class="form">
          <md-list>
              <md-list-item style=" display: flex; justify-content: center;">
                  <md-accordion>
                      <md-expansion-panel>
                          <md-expansion-panel-header>
                              <md-panel-title>
                                  Вскрытие 1
                              </md-panel-title>
                          </md-expansion-panel-header>
                          <md-input-container style="width: 375px">
                              <input mdInput
                                     type="text"
                                     placeholder="Название">
                          </md-input-container>
                      </md-expansion-panel>
                  </md-accordion>
              </md-list-item>
          </md-list>
      </div>
  `,
  styles: [`.form{
      min-height: 5vw;
  }
  md-list-item{
      display: flex;
      justify-content: center;
  }
  h4{
      text-align: center;
  }
  `],
})

export class ExcavationTemplateIComponent {

  @Input() count: number;
}



