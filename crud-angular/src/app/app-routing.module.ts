import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//path: '' -> acessar a aplicacao num caminho vazio vou mandar abrir courses.
//pathMatch: 'full' -> vai verificar se n tem nada extra alem do caminho. a barra não é um problema
//agora vamos adicionar um lazyloading para cursos.
//consultamos a documentação
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m=>m.CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
