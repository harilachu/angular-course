import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseCardComponent } from "./course-card/course-card.component";
import { CourseService } from './Services/course-service.service';
import { ContentProjectionComponent } from "./content-projection/content-projection.component";
import { TempWithinCompComponent } from "./temp-within-comp/temp-within-comp.component";
import { DeferredComponent } from './defer/deferred.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CourseCardComponent,
    ContentProjectionComponent,
    TempWithinCompComponent,
DeferredComponent
],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
