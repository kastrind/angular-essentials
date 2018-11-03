import { Component } from '@angular/core';

@Component({
    selector : 'app-user',
    template : `
    <p>Hello!</p>
    <p>I am the user component!</p>`
})

export class UserComponent {
    title = "test";
}