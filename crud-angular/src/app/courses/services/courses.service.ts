import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { tap, first, delay } from 'rxjs/operators';

//usaremos o servico dentro do componente.
//também manipularemos os dados para que seja enviado
//para a forma que o componente espera
//servicos usam o decorator injectable e tb faz parte da injecao de dependencia
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //caminho end-point do servidor, por hora é um arquivo
  private readonly API = '../../../assets/courses.json';

  //queremos obter os dados de uma api que iremos construir, pra isso
  //precisamos fazer requisiçoes ajax (para uma api)
  //uma chamada assincrona para o servidor
  //no angular ja temos uma classe utilitaria que fornece todos os metodos
  //para fazermos essa conecao com a api: HTTPCLIENT
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe( //pipe = cano. manipular a informação de forma reativa passando pelo cano. (com operadores rxjs)
      //take(1),
      first(), //finaliza a conexão
      //delay(5000),
      tap(listaCursos => console.log(listaCursos))
    );
  };

}
