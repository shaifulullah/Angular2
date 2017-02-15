import {Component} from '@angular/core';
import {AuthorsService} from './authors.service';

@Component({
    selector: 'authors',
    template:`
    {{title}}
    <ul>
        <li *ngFor="let author of authors">
            {{author}}
        </li>
    </ul>
    `
})

export class AuthorsComponent{
 title = "Title of Authors Page";
 authors;

 constructor (authorsService: AuthorsService){
    this.authors = authorsService.getauthors();
}
}