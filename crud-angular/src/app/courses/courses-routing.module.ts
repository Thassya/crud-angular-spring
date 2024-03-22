import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: '', component: CoursesComponent } //dentro de courses, vai ser um caminho em branco e vai chamar o component que criamos agora.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
