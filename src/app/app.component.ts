import {AfterViewInit, Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import { IToDos } from './model/todos';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_CONFIG, CONFIG_TOKEN, IAppConfig } from './model/appconfig';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    //provider can be added here or within the configuration token
    // providers:[{
    //   provide: CONFIG_TOKEN,
    //   useFactory:()=> APP_CONFIG
    // }]
})
export class AppComponent implements OnInit {

  todos$: Observable<IToDos[]>;


  constructor(private http:HttpClient,
    @Inject(CONFIG_TOKEN) private config:IAppConfig) //injecting app configuration)
    {

    console.log("App Configuration: " + config.url, config.port);
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
