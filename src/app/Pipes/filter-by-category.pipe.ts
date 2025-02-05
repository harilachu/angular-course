import { Pipe, PipeTransform } from "@angular/core";
import { IToDos } from "../model/todos";

@Pipe({
  name: 'filterByCompleted',
  pure: false //made impure pipe. Impure pipe executes when there is a change in the object property value. This will cause performance degradation.
})
export class FilterByCompleted implements PipeTransform{
  transform(value: IToDos[], ...args: any[]) {
    const completed: boolean = Boolean(args[0]);
    if(!value)
      return [];

    return value.filter(x=>x.completed===completed) ;
  }

}
