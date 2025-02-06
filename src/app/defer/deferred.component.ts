import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'deferred',
  imports: [],
  template: `
    <h1>
      deferred works!
    </h1>
  `,
  styles: `
  h1{
    color: crimson;
  }
  `
})
export class DeferredComponent {
  
}
