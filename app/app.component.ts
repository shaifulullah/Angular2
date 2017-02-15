import { Component } from '@angular/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
  selector: 'my-app',
  template: `<h1>This is Angular2 app</h1>
  <courses></courses>
  <authors></authors>`
})
export class AppComponent { }
