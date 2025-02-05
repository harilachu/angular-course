import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import { IToDos } from './model/todos';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {

  todos$: Observable<IToDos[]>;

  constructor(private http:HttpClient) {

  }

  ngOnInit() {
    this.todos$ = this.http.get<IToDos[]>('https://jsonplaceholder.typicode.com/todos');
      // .subscribe(response =>{
      //   console.log(response);
      // });

      console.log("///////////////////HTTP using Params////////////////")
      this.getUsingParams();
  }

  getUsingParams(){

    let params = new HttpParams();
    params.set('postId', '1');

    this.http.get('https://jsonplaceholder.typicode.com/comments', {params: params})
    .subscribe(response =>{
      console.log(response);
    });
  }

}
