import { Component, OnInit } from '@angular/core';
import { CoursesService } from './../services/courses.service';

import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses', //selector, diretiva. o que poderemos usar no html (semelhante ao <mat-toolbar></mat-toolbar>)
  templateUrl: './courses.component.html', //
  styleUrl: './courses.component.scss'
})

//como usar o servico aqui? atraves da DI, dependency injection
export class CoursesComponent implements OnInit {

  //observables usando $ no nome da variavel
  cursos$: Observable<Course[]>;
  displayedColumns =['name', 'category'];

  constructor(private coursesService: CoursesService){
    this.cursos$ = this.coursesService.list();
  }

  ngOnInit(): void {

  }

}
