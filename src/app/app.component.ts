import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'o app funciona! mesmo oi';
  open = true;


  options :any =   {
    'fixed': true,
    'top': 0,
    'bottom': 0,
  };

  constructor() {
  }


}
