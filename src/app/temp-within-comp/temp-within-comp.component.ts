import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'temp-within-comp',
  imports: [CommonModule],
  templateUrl: './temp-within-comp.component.html',
  styleUrl: './temp-within-comp.component.css'
})
export class TempWithinCompComponent {
@Input()
  noImgTempl : TemplateRef<any>

  showImage: boolean = false;
}
