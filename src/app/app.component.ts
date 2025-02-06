import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseService } from './Services/course-service.service';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    providers: [],
})
export class AppComponent implements AfterViewInit {

  //#region Basics

  coursesList: Course[];

  startDate = new Date(2000, 0, 1);

  //Reference to a component from html front end. If there are multiple components, it will reference first component object.
  //only direct child components can be referenced. Not deep child components.
  @ViewChild(CourseCardComponent) //can also use template reference
  courseCardComponent: CourseCardComponent;

  @ViewChild('cardContainer') //template reference
  cardContainer: ElementRef //here div html Element is referenced

  @ViewChildren(CourseCardComponent) //List of component references
  courseCardsList: QueryList<CourseCardComponent>;

  constructor(private courseService: CourseService) {
    this.coursesList = this.courseService.getAllCourses();
  }

  //Angular lifecycle hook, called after the component's view has been fully initialized.
  ngAfterViewInit(): void {
    //Accessing the DOM element using ElementRef
    console.log(this.cardContainer.nativeElement);

    //Capture changes in QueryList, when data is added to the course list
    this.courseCardsList.changes.subscribe(cards=>{
      cards.forEach(card=>{
        console.log(card.course.description);
      })
    })
  }

  onCourseSelected(course: Course) {
    console.log("Course Selected: ", course);
  }

  //tracking function for course (for loop) using unique id. For loop updates the view with changes in the course Entity.
  trackCourse(index: number, course: Course){
    return course.id;
  }

  onCoursesEdited(){
    this.coursesList.push({
      id: 1,
      description: "Angular Core Deep Dive",
      //iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: 'INTERMEDIATE',
      lessonsCount: 10
    } as Course);
  }
  //#endregion


}
