import { Component } from '@angular/core';
//production Mode
import {enableProdMode} from '@angular/core';

enableProdMode();
//production Mode

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AbcShopping';
}
