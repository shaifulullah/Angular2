import {Injectable} from '@angular/core';

@Injectable()
export class CourseService{
    getCourses() : string[] {
        return ["Course no 01","Course no 02","Course no 03"];
    }
}