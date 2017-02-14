import {Component} from '@angular/core';
import { CourseService } from './courses.service';

@Component({
    selector: 'courses',
    template:`
        <h2>Listing all courses</h2>
        {{title}}
        <ul>
            <li *ngFor = "let course of courses">
                {{course}}
            </li>
        </ul>
    `,
    
})

export class CoursesComponent{
    title = "This is a title";
    courses ;

    constructor (courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}