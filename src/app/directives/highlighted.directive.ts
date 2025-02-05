import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

const selectedStyle: string = '10px solid Blue';


@Directive({
  selector: '[highlighted]',
  exportAs: 'hl' //export and use the toggle function
})

export class HighlightedDirective {

  @Input('highlighted')
  highlightor:boolean = false;

  currentStyle:string = '';

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() { }

  // @HostBinding('className') //bind to the DOM property
  // get cssClasses(){
  //   return ['highlighted']; //returns the property value
  // }

  @HostBinding('class.highlighted') //specific class
  get isHighlighted() {
    return this.highlightor; //returns a boolean value
  }

  @HostBinding('style.border')
  get borderStyle() {
    return this.currentStyle; //returns a string value
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver($event) {
    this.highlightor = true;
    this.toggleHighlight.emit(this.highlightor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlightor = false;
    this.toggleHighlight.emit(this.highlightor);
  }

  toggle(){
    this.currentStyle =  this.currentStyle ==='' ?selectedStyle:'';
    console.log('toggled style', this.currentStyle);
  }
}
