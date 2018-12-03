import { Component } from '@angular/core';
import { random } from 'lodash';

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
    this.number = random(1, 10);
  }

}
