import { Injectable } from '@angular/core';
import { getAllCourses } from '../../../server/get-courses.route';
import { Course } from '../model/course';
import { COURSES } from 'src/db-data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getAllCourses(): Course[]{

    return COURSES.map(c=>
      {
        return {
          id: c.id,
          description: c.description,
          iconUrl: c.iconUrl,
          longDescription: c.longDescription,
          category: c.category,
          lessonsCount: c.lessonsCount
        }
    }) as Course[];
  }
}
