import { Component, Signal, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template :`
  <h1>{{Count()}}</h1>
  <h2>Computed:{{CountPlus()}}</h2>
  <br>
  <button (click)="increment()">+</button>
  <button (click)="decrement()">-</button>
  <hr>
  <ul>
  <li *ngFor
  ="let r of results">{{r}}
  </li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  count=signal(0);
  results=signal<string[]>([]);
  countPlus=computed(()=>this.count()+);
_=effect(()=>console.log(this.count()+"değişti"));
  increment()
  {
    //
  }
  decrement(){
   //
  }
}
