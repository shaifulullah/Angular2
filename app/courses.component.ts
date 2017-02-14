import {Component} from '@angular/core';

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
    `
})
export class CoursesComponent{
    title = "This is a title";
    courses = ["Course no 01","Course no 02","Course no 03"];
}