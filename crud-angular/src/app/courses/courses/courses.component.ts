import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  cursos: Course[] = [
    {_id: '1', name: 'Angular', category: 'front-end'}
  ];
  displayedColumns =['name', 'category'];

  constructor(){
    //this.cursos = []; //posible to inciate here now, not only on ngOnInit
  }
  ngOnInit(): void {

  }

}
