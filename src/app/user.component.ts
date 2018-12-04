import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'app-user',
    template : `
    <input type="text" (input)="onUserInput($event)" [value]="name">
    <button class="btn" [ngClass]="{'btn-primary': name !== '', 'btn-default': name === ''}" (click)="onUserAdded($event)">Add</button>
    <!--<input type="text" (input)="onUserInput($event)" [value]="name">-->
    <!--<input type="text" [(ngModel)]="name">-->
    <p>Hello {{name}}!</p>
    <p>I am the user component!</p>
    <app-user-detail></app-user-detail>
    `
})

export class UserComponent {
    @Input() name;
    @Output() nameChanged = new EventEmitter<string>();
    @Output() nameAdded = new EventEmitter<string>();

    onUserInput(event) {
      // this.name = event.target.value;
      this.nameChanged.emit(event.target.value);
    }

    onUserAdded() {
      this.nameAdded.emit(this.name);
    }
}
