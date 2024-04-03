import { Injectable } from '@angular/core';

//usaremos o servico dentro do componente.
//também manipularemos os dados para que seja enviado
//para a forma que o componente espera
//servicos usam o decorator injectable e tb faz parte da injecao de dependencia
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
}
