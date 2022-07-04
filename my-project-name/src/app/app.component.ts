import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'string-thing';
  name: string = 'Juan Soto'; //doesn't need to be TS, can be JS too --------> name = 'Juan Soto';
  itemList: string[] = ['item1', 'item2', 'item3', 'item4'];
}
