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
  names = ['Aragorn', 'Boromir', 'Legolas'];
  number = 0;

  onNameChanged(newName) {
    this.rootName = newName;
    //example of a function imported from a js framework
    this.number = random(1, 10);
  }

  onNameAdded(newName) {
    this.names.push(newName);
  }

}
