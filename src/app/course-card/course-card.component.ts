import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { IToDos } from '../model/todos';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: false
})
export class CourseCardComponent implements OnInit {

    @Input()
    todo: IToDos;

    @Input()
    cardIndex: number;

    @Output('todoChanged')
    todoEmitter = new EventEmitter<IToDos>();


    constructor() {

    }

    ngOnInit() {

    }


    onSaveClicked(title:string) {

        this.todoEmitter.emit({...this.todo, title});

    }




}
