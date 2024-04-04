import { Component, OnInit } from '@angular/core';
import { CoursesService } from './../services/courses.service';

import { Course } from '../model/course';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

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

  constructor(
      private coursesService: CoursesService,
      public dialog: MatDialog
    ){
    this.cursos$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos. ')
        return of ([])
      })
    );
    //operador of cria um observable de qlqr informacao na memoria
    //nesse caso criamos um array vazio
  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }


  ngOnInit(): void {

  }

}
