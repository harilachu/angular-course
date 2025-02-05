import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";
import { CommonModule } from "@angular/common";

@Component({
  selector: "course-card",
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input({ required: true })
  course: Course;

  @Input({ required: true })
  index: number;

  @Input({ required: true })
  count: number;

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  onViewCourse() {
    this.courseSelected.emit(this.course);
  }

  cardClasses(){
    return {
      'beginner': this.course.category == 'BEGINNER'
    }
  }
}
