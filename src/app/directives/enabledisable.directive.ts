import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[enabledisable]'
})
export class EnabledisableDirective {

  @Input('enabledisable')
  isDisabled: boolean = false;

  constructor() { }

  @HostBinding('attr.disabled') //disabled attribute from DOM element
  get disabled(): boolean {
    return this.isDisabled;
  }
}
