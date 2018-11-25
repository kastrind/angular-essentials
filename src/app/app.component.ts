import { Component } from '@angular/core';
import 'lodash';

declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = 'Bilbo';
  number = 0;

  onNameChanged(newName) {
    this.rootName = newName;
    this.number = _.random(1, 10);
  }

}
