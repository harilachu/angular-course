import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'content-projection',
  imports: [],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.css'
})
export class ContentProjectionComponent implements AfterViewInit, AfterContentInit {


  @ContentChild('projectionHeader') //template reference / component
  projectionHeader: ElementRef;

  @ContentChildren('myDivs', {read: ElementRef}) //html native element reference
  myDivs: QueryList<ElementRef>;

  // @ContentChildren(Component)
  // component: QueryList<Component>;

  ngAfterViewInit(): void {
    console.log('ProjectionHeader: ', this.projectionHeader);
  }

  ngAfterContentInit(): void {
    // console.log('Div contents: ', this.component);
    console.log('MyDiv contents: ', this.myDivs);
  }
}
