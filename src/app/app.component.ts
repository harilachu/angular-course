import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;

    //Get Highlighted directive instance from Course Card Component
    @ViewChild(CourseCardComponent, {read: HighlightedDirective})
    highlighted: HighlightedDirective;

    //Highlighted directive from h1 element
    @ViewChild('highlightHeader', {read: HighlightedDirective})
    h1Highlighted: HighlightedDirective;

    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards : QueryList<ElementRef>;


    constructor() {

    }

    ngAfterViewInit() {

    }

    onCourseSelected(course:Course) {

    }

    onToggleHighlight(highlighted: boolean) {
      console.log(highlighted);
    }

    onClickHighlight(event)
    {
      this.h1Highlighted.toggle(); //call directives method
    }
}
