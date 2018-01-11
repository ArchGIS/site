/**
 * Angular 2 decorators and services
 */
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import {PreoladSpinner} from "./theme/services/preload/preolad.service";

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    
        
    <main>
      <router-outlet></router-outlet>
    </main>

  `
})
export class AppComponent implements AfterViewInit {

  constructor(private _state: PreoladSpinner) {}

  public ngAfterViewInit() {
    this._state.hide();
  }

}

