import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Tarjeta de presentación';
  buttonText: string = 'Save';

  saveEvent() {
    if (this.buttonText === 'Save') {
      this.buttonText = 'Edit';
    } else {
      this.buttonText = 'Save';
    }
  }

}
